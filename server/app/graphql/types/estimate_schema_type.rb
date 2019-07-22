# frozen_string_literal: true

module Types
  class EstimateSchemaType < Types::BaseObject
    graphql_name 'EstimateSchema'

    field 'all', [Integer], null: false

    def all
      object
    end
  end
end
