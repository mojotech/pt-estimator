module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      "from rails graphql!"
    end
  end
end
