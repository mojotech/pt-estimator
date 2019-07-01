# frozen_string_literal: true

class User < ApplicationRecord
  def self.valid_token?(email:, token:)
    client = TrackerApi::Client.new(token: token)
    client.me.email == email
  rescue StandardError
    false
  end
end
