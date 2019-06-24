# frozen_string_literal: true

require 'json'
require 'io/console'
require 'faraday'
require 'logger'
require 'pry'

# PTEstimator namespace
module PTEstimator
  # Knows how to make a request to PivotalTracker
  # Understands that credentials must be attached

  # Doesn't know how to construct the payload for the requests that it makes
  # Just delivers the resources its presented with, ensuring auth is included
  class Client
    def initialize(username:, password:)
      @token = auth_user(username, password)['api_token']
    end

    def post(url:, payload:)
      response = connection.post do |request|
        request.url(url)
        request.body = payload.to_json
      end
      JSON.parse(response.body)
    end

    def put(url:, payload:)
      response = connection.put do |request|
        request.url(url)
        request.body = payload.to_json
      end
      JSON.parse(response.body)
    end

    # rubocop:disable Lint/UnusedMethodArgument
    def get(url:, payload:)
      JSON.parse((connection.get url).body)
    end

    def delete(url:, payload:)
      JSON.parse((connection.delete url).body)
    end
    # rubocop:enable Lint/UnusedMethodArgument

    private

    def connection
      Faraday.new(
        url: 'https://www.pivotaltracker.com',
        headers: {
          'X-Trackertoken' => @token,
          'Content-Type' => 'application/json'
        }
      )
    end

    def auth_user(uname, password)
      auth_resp = nil
      att = 0
      max_att = 3
      capture = uname.nil? && password.nil?

      while auth_resp.nil?
        auth_resp = attempt_login(att, max_att, capture, uname, password)

        att += 1
      end

      auth_resp
    end

    def attempt_login(att, max_att, capture, uname, password)
      raise 'Max amount of login attempts reached' if att >= max_att
      raise 'Wrong credentials' if att.positive? && !capture

      uname, password = capture_auth_info if capture
      resp = make_auth_http_req(uname, password)
      resp if resp['kind'] == 'me'
    end

    def capture_auth_info
      puts 'uname:'
      uname = gets.chomp
      puts 'password:'
      password = STDIN.noecho(&:gets).chomp
      [uname, password]
    end

    def make_auth_http_req(uname, password)
      con = Faraday.new(url: 'https://www.pivotaltracker.com')
      con.basic_auth(uname, password)
      JSON.parse(con.get('https://www.pivotaltracker.com/services/v5/me').body)
    end
  end
end
