# frozen_string_literal: true

require 'net/http'
require 'uri'
require 'json'
require 'io/console'

def get_story(project_id, story_id = nil)
  uri = URI.parse('https://www.pivotaltracker.com/services/v5/projects/' \
    "#{project_id}/stories/#{story_id}")
  request = Net::HTTP::Get.new(uri)
  request['X-Trackertoken'] = auth_user['api_token']
  create_http_req(uri, request)
end

def put_story_estimate(project_id, story_id, estimate)
  allowed, api_token = allow_estimate?(project_id, estimate)

  return "Estimate of #{estimate} not allowed in point scale" unless allowed

  uri = URI.parse('https://www.pivotaltracker.com/services/v5/projects/'\
    "#{project_id}/stories/#{story_id}")
  request = Net::HTTP::Put.new(uri)
  request.content_type = 'application/json'
  request.body = JSON.dump('estimate' => estimate)
  request['X-Trackertoken'] = api_token
  create_http_req(uri, request)
end

def allow_estimate?(project_id, estimate)
  uri = URI.parse('https://www.pivotaltracker.com/services/v5/projects/' \
     "#{project_id}")
  request = Net::HTTP::Get.new(uri)
  api_token = auth_user['api_token']
  request['X-Trackertoken'] = api_token
  scale = create_http_req(uri, request)['point_scale'].split(',').map(&:to_i)
  [scale.include?(estimate), api_token]
end

def create_http_req(uri, request)
  req_options = { use_ssl: uri.scheme == 'https' }
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  JSON.parse(response.body)
end

def auth_user
  token_response = nil

  while(token_response.nil?) do 
    username, password = capture_auth_information

    response = make_auth_request(username, password)

    token_response = response if allow_kind?(response)
  end

  token_response
end

def capture_auth_information
  puts 'username:'
  username = gets.chomp
  puts 'password:'
  password = STDIN.noecho(&:gets).chomp

  [username, password]
end

def make_auth_request(username, password)
  uri = URI.parse('https://www.pivotaltracker.com/services/v5/me')
  request = Net::HTTP::Get.new(uri)
  request.basic_auth(username, password)
  create_http_req(uri, request)
end


def allow_kind?(response)
  kinds = ['me']
  kinds.include?(response['kind'])
end

project_id = '2354450'
poc_story_id = '166701587'
puts get_story(project_id) # Get all stories
puts get_story(project_id, poc_story_id) # Get one story only
puts put_story_estimate(project_id, poc_story_id, 2) # Estimate of 2 on a story
puts put_story_estimate(project_id, poc_story_id, 4) # Not allowed in fib scale
