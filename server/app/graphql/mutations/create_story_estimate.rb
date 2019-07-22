# frozen_string_literal: true

module Mutations
  class CreateStoryEstimate < BaseMutation
    argument :story_id, String, required: true
    argument :point_value, Integer, required: true
    argument :user_email, String, required: true

    type Types::EstimateType

    def resolve(story_id:, point_value:, user_email:)
      Story.save_estimate(story_id: story_id, point_value: point_value,
                          user_email: user_email)
    end
  end
end
