module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      "from rails graphql!"
    end

    field :users, [UserType], null: false do
      description "PT Estimator Users"
    end

    def users
      User.all
    end

    field :new_user, UserType, null: false do
      description "New PT Estimator User"
      argument :email, String, required: true
      argument :name, String, required: true
      argument :first_name, String, required: true
      argument :last_name, String, required: true
      argument :img_url, String, required: true
    end

    def new_user(email:, name:, first_name:, last_name:, img_url:)
      User.create(
        :email => email,
        :name => name,
        :first_name => first_name,
        :last_name => last_name,
        :img_url => img_url
      )
    end

  end
end
