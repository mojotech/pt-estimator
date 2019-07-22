# frozen_string_literal: true

module Types
  class PtErrorType < Types::BaseObject
    graphql_name 'PtError'

    field 'code', String, null: false
    field 'kind', String, null: false
    field 'error', String, null: false
    field 'possible_fix', String, null: false
  end
end
