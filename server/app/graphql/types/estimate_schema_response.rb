# frozen_string_literal: true

module Types
  class EstimateSchemaResponse < Types::BaseUnion
    description 'Possible responses for getting a schema estimate'
    possible_types EstimateSchemaType, DbErrorType, PtErrorType

    def self.resolve_type(object, _context)
      if object.is_a?(Hash) && object.key?(:message)
        DbErrorType
      elsif object.is_a?(Hash) &&
            %i[code kind error possible_fix].all?(&object.method(:key?))
        PtErrorType
      else
        EstimateSchemaType
      end
    end
  end
end
