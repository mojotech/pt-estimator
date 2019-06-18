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

def create_http_req(uri, request)
  req_options = { use_ssl: uri.scheme == 'https' }
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  JSON.parse(response.body)
end

def auth_user
  puts 'username:'
  username = gets.chomp
  puts 'password:'
  password = STDIN.noecho(&:gets).chomp

  uri = URI.parse('https://www.pivotaltracker.com/services/v5/me')
  request = Net::HTTP::Get.new(uri)
  request.basic_auth(username, password)
  response = create_http_req(uri, request)
  return auth_user unless allow_kind?(response)

  response
end

def allow_kind?(response)
  kinds = ['me']
  kinds.include?(response['kind'])
end

project_id = '2354450'
poc_story_id = '166701587'
puts get_story(project_id) # Get all stories
puts get_story(project_id, poc_story_id) # Get one story only
