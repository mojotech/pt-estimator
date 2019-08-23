# frozen_string_literal: true

class Project < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :stories, dependent: :destroy

  def self.get_valid_estimates(token:, project_id:)
    client = TrackerApi::Client.new(token: token)
    client.project(project_id).point_scale.split(',').map(&:to_i)
  end
end
