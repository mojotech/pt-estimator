# frozen_string_literal: true

module Types
  class TaskType < Types::BaseObject
    graphql_name 'StoryTask'

    field 'id', ID, null: false
    field 'description', String, null: false
    field 'complete', Boolean, null: false
  end
end
