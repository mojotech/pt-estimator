# frozen_string_literal: true

module Types
  class UserInputType < Types::BaseInputObject
    description 'Input to store a new user'

    argument 'email', String, required: true
    argument 'name', String, required: true
    argument 'first_name', String, required: true
    argument 'last_name', String, required: true
    argument 'img_url', String, required: true
  end
end
