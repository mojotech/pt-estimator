# frozen_string_literal: true

module Types
  class EstimateResponse < Types::BaseUnion
    description 'Possible responses for adding an estimate'
    possible_types EstimateType, DbErrorType, PtErrorType

    def self.resolve_type(object, _context)
      if object.is_a?(Hash) && object.key?(:message)
        DbErrorType
      elsif object.is_a?(Hash) &&
            %i[code kind error possible_fix].all?(&object.method(:key?))
        PtErrorType
      else
        EstimateType
      end
    end
  end
end
