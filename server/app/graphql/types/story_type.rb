# frozen_string_literal: true

module Types
  class StoryType < Types::BaseObject
    graphql_name 'Story'

    field 'id', ID, null: false
    field 'name', String, null: false
    field 'description', String, null: true
    field 'story_type', String, null: false
    field 'tasks', [TaskType], null: false
    field 'comments', [CommentType], null: false
    field 'estimate', Float, null: true
    field 'labels', [LabelType], null: true
    field 'user_estimates', [EstimateType], null: true
  end
end
