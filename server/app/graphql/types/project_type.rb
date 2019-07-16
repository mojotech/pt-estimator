# frozen_string_literal: true

module Types
  class ProjectType < Types::BaseObject
    graphql_name 'Project'

    field 'id', ID, null: false
    field 'stories', [StoryType], null: false
  end
end
