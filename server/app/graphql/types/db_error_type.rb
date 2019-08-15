# frozen_string_literal: true

module Types
  class DbErrorType < Types::BaseObject
    graphql_name 'DbError'

    field 'message', String, null: false
  end
end
