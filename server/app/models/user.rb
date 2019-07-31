# frozen_string_literal: true

class User < ApplicationRecord
  has_and_belongs_to_many :projects

  def self.valid_token?(email:, token:)
    client = TrackerApi::Client.new(token: token)
    client.me.email == email
  rescue StandardError
    false
  end

  def find_projects_stories(token:, filter:)
    projects = TrackerApi::Client.new(token: token).projects
    self.list_user_project_stories(projects: projects, filter: filter)
  end

  def list_user_project_stories(projects:, filter:)
    self.projects.delete_all
    projects.map do |p|
      pr = Project.find_or_initialize_by(id: p.id)
      pr.name = p.name
      pr.save!
      self.projects << pr
      st = Story.filter_stories_to_review(pt_project: p, db_project: pr,
                                          filter: filter)
      { id: pr[:id], name: pr[:name], stories: st } unless st.empty?
    end .compact
  end
end
