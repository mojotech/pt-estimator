# frozen_string_literal: true

module Types
  class ProjectResponse < Types::BaseUnion
    description 'Possible responses for a project query'
    possible_types ProjectCollectionType, PtErrorType

    def self.resolve_type(object, _context)
      if object.is_a?(Hash) &&
         %i[code kind error possible_fix].all?(&object.method(:key?))
        PtErrorType
      else
        ProjectCollectionType
      end
    end
  end
end
