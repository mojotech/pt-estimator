# frozen_string_literal: true

module Types
  class LabelType < Types::BaseObject
    graphql_name 'StoryLabel'
  
    field 'id', ID, null: false
    field 'name', String, null: false
  end
end
  