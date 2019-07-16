# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      'from rails graphql!'
    end

    field :fetch_user, UserType, null: false do
      description 'Fetch or store a user'
      argument :data, UserInputType, required: true
    end

    def fetch_user(data:)
      user = User.find_by(email: data.to_h[:email])
      return User.create!(data.to_h) if user.nil?

      user.update(data.to_h)
      user
    end

    field :validity, Boolean, null: false do
      description 'Check validity of user token and email'
      argument :email, String, required: true
      argument :token, String, required: true
    end

    def validity(email:, token:)
      user = User.find_by(email: email)
      if user.valid_token?(email: email, token: token)
        user.update(api_token: token)
        return true
      end
      false
    rescue StandardError
      false
    end

    field :projects, ProjectResponse, null: false do
      description 'List of projects for that user'
      argument :token, String, required: true
      argument :filter, String, required: true
    end

    def projects(token:, filter:)
      user = User.find_by(api_token: token)
      return [] if filter.empty? || user.nil?

      user.find_projects_stories(token: token, filter: filter)
    rescue TrackerApi::Errors::ClientError, TrackerApi::Errors::ServerError => e
      e.response.with_indifferent_access[:body]
    end
  end
end
