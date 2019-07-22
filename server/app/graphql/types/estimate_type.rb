# frozen_string_literal: true

module Types
  class EstimateType < Types::BaseObject
    graphql_name 'Estimate'

    field 'id', ID, null: false
    field 'point_value', Float, null: false
  end
end
