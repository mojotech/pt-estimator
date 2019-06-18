# frozen_string_literal: true

require 'json'
require 'io/console'
require 'faraday'

def faraday_builder
  Faraday.new('url' => 'https://www.pivotaltracker.com')
end

def get_story(proj_id, story_id: nil, uname: nil, password: nil)
  con = faraday_builder
  resp = con.get "/services/v5/projects/#{proj_id}/stories/#{story_id}" do |req|
    req.headers['X-Trackertoken'] = auth_user(uname, password)['api_token']
  end
  JSON.parse(resp.body)
end

def auth_user(uname, password)
  auth_resp = nil
  attempts = 0
  max_attempts = 3
  capture = uname.nil? && password.nil?

  while auth_resp.nil?
    uname, password, auth_resp =
      attempt_login(attempts, max_attempts, uname, password, capture)

    attempts += 1
  end
  auth_resp
end

def attempt_login(attempts, max_attempts, uname, password, capture)
  raise 'Max amount of login attempts reached' if attempts >= max_attempts

  uname, password = capture_auth_info if capture
  resp = make_auth_req(uname, password)
  auth_resp = resp if allow_kind?(resp)

  [uname, password, auth_resp]
end

def capture_auth_info
  puts 'uname:'
  uname = gets.chomp
  puts 'password:'
  password = STDIN.noecho(&:gets).chomp
  [uname, password]
end

def make_auth_req(uname, password)
  con = faraday_builder
  con.basic_auth(uname, password)
  JSON.parse(con.get('https://www.pivotaltracker.com/services/v5/me').body)
end

def allow_kind?(resp)
  kinds = ['me']
  kinds.include?(resp['kind'])
end
