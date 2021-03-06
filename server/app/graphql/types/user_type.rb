# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    graphql_name 'User'

    field 'id', ID, null: false
    field 'email', String, null: false
    field 'name', String, null: false
    field 'first_name', String, null: false
    field 'last_name', String, null: false
    field 'img_url', String, null: false
    field 'api_token', String, null: true
  end
end
