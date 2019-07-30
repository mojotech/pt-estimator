# frozen_string_literal: true

module Mutations
  class CreateStoryComment < BaseMutation
    argument :story_id, String, required: true
    argument :text, String, required: true

    type Types::StoryResponse

    def resolve(story_id:, text:)
      token = User.find_by(email: context[:current_user][:email])[:api_token]
      Story.add_comment(token: token, story_id: story_id, text: text)
    rescue TrackerApi::Errors::ClientError, TrackerApi::Errors::ServerError => e
      e.response.with_indifferent_access[:body]
    end
  end
end
