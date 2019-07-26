# frozen_string_literal: true

module Types
  class CommentType < Types::BaseObject
    graphql_name 'StoryComment'

    field 'id', ID, null: false
    field 'text', String, null: false
    field 'person_id', Integer, null: false
    field 'created_at', UnixDateTimeType, null: false
  end
end
