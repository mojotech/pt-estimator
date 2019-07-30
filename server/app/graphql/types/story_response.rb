# frozen_string_literal: true

module Types
  class StoryResponse < Types::BaseUnion
    description 'Possible responses for a story'
    possible_types StoryType, ErrorType

    def self.resolve_type(object, _context)
      if object.is_a?(Hash) &&
         %i[code kind error possible_fix].all?(&object.method(:key?))
        ErrorType
      else
        StoryType
      end
    end
  end
end
