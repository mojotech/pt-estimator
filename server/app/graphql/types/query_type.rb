module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      "from rails graphql!"
    end

    field :fetch_user, UserType, null: false do
      description "Fetch or store a user"
      argument :data, UserInputType, required: true
    end

    def fetch_user(data:)
      user = User.find_by(:email=>data.to_h[:email])
      return User.create!(data.to_h) if user.nil?
      user.update(data.to_h)
      user
    end
  end
end
