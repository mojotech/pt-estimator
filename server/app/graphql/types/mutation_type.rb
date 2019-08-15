# frozen_string_literal: true

module Types
  class MutationType < BaseObject
    field :create_comment, mutation: Mutations::CreateStoryComment
    field :create_estimate, mutation: Mutations::CreateStoryEstimate
  end
end
