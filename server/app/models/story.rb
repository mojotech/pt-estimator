# frozen_string_literal: true

class Story < ApplicationRecord
  belongs_to :project

  def self.filter_stories_to_review(pt_project:, pt_members:, db_project:, filter:)
    users = pt_members.map{ |membership| membership.person}
    pt_project.stories(filter: filter).map do |s|
      db_story = db_project.stories.find_or_create_by(id: s.id)
      db_story.build_story(pt_story: s, project_users: users)
    end .compact
  end

  def build_story(pt_story:, project_users:)
    comms = Story.sort_comments(pt_coms: pt_story.comments).map do |c|
      c_name = project_users.select{|u| u.id == c.person_id}.first.name
      { id: c.id, text: c.text, person_name: c_name,
        created_at: c.created_at }
    end .compact

    tasks = pt_story.tasks.map do |t|
      { id: t.id, description: t.description, complete: t.complete }
    end .compact

    remove_review = pt_story.labels.reject{ |l| l.name == ENV['PT_LABEL']}
    labels = remove_review.map do |l|
      {id: l.id, name: l.name}
    end .compact          

    st = pt_story.to_h.slice(:id, :name, :description, :story_type, :estimate)
    st.merge!(tasks: tasks, comments: comms, labels: labels)
  end

  def self.sort_comments(pt_coms:)
    pt_coms.sort_by { |c| c.created_at } .reverse
  end

  def self.build_comment(com:, project_users:)
    c_name = project_users.select{|u| u.id == com.person_id}.first.name
    { id: com.id, text: com.text, person_name: c_name,
      created_at: com.created_at }
  end

  def self.add_comment(token:, story_id:, text:, project_id:)
    client = TrackerApi::Client.new(token: token)
    curr_proj = client.projects.select{ |p| p.id.to_s == project_id}.first
    users = curr_proj.memberships.map{ |membership| membership.person}
    build_comment(com: client.story(story_id).create_comment(text: text), project_users: users)
    curr_story = Story.find(story_id)
    curr_story.build_story(pt_story: client.story(story_id), project_users: users)
  end
end
