# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      'from rails graphql!'
    end

    field :has_api_token, Boolean, null: false do
      description 'Determine if the current user has an API token'
    end

    def has_api_token
      !User.find_by(email: context[:current_user][:email])[:api_token].nil?
    end

    field :is_api_token_valid, Boolean, null: false do
      description 'Check validity of user token and email'
      argument :token, String, required: true
    end

    def is_api_token_valid(token:)
      email = context[:current_user][:email]
      if User.valid_token?(email: email, token: token)
        user = User.find_by(email: email)
        user.update(api_token: token)
        return true
      end
      false
    rescue StandardError
      false
    end

    field :projects, ProjectResponse, null: false do
      description 'List of projects for that user'
      argument :filter, String, required: true
    end

    def projects(filter:)
      user = User.find_by(email: context[:current_user][:email])
      return [] if filter.empty? || user.nil?

      user.find_projects_stories(token: user[:api_token], filter: filter)
    rescue TrackerApi::Errors::ClientError, TrackerApi::Errors::ServerError => e
      e.response.with_indifferent_access[:body]
    end

    field :pointing_schema, EstimateSchemaResponse, null: false do
      description 'Array of valid points on a project'
      argument :project_id, String, required: true
    end

    def pointing_schema(project_id:)
      token = User.find_by(email: context[:current_user][:email])[:api_token]
      Project.get_valid_estimates(token: token, project_id: project_id)
    rescue TrackerApi::Errors::ClientError, TrackerApi::Errors::ServerError => e
      e.response.with_indifferent_access[:body]
    end

    field :story_estimates, [EstimateType], null: true do
      description 'Array of estimates for a story'
      argument :story_id, String, required: true
    end

    def story_estimates(story_id:)
      Story.get_story_estimates(story_id: story_id)
    end
  end
end
