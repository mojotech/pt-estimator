# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false

    def test_field
      'from rails graphql!'
    end

    field :fetch_user, UserType, null: false do
      description 'Fetch or store a user'
      argument :data, UserInputType, required: true
    end

    def fetch_user(data:)
      user = User.find_by(email: data.to_h[:email])
      return User.create!(data.to_h) if user.nil?

      user.update(data.to_h)
      user
    end

    field :validity, Boolean, null: false do
      description 'Check validity of user token and email'
      argument :email, String, required: true
      argument :token, String, required: true
    end

    def validity(email:, token:)
      if User.valid_token?(email: email, token: token)
        user = User.find_by(email: email)
        user.update(api_token: token)
        return true
      end
      false
    rescue StandardError
      false
    end
  end
end
