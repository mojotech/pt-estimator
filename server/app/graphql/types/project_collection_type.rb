# frozen_string_literal: true

module Types
  class ProjectCollectionType < Types::BaseObject
    graphql_name 'ProjectCollection'

    field 'all', [ProjectType], null: false

    def all
      object
    end
  end
end
