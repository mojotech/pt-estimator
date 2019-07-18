module Types
  class MutationType < BaseObject
    field :create_comment, mutation: Mutations::CreateStoryComment
  end
end
