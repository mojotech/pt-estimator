# frozen_string_literal: true

module Types
  class EstimateResponse < Types::BaseUnion
    description 'Possible responses for adding an estimate'
    possible_types EstimateType, DbErrorType

    def self.resolve_type(object, _context)
      if object.is_a?(Hash)
        DbErrorType
      else
        EstimateType
      end
    end
  end
end
