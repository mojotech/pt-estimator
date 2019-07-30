# frozen_string_literal: true

class Story < ApplicationRecord
  belongs_to :project

  def self.filter_stories_to_review(pt_project:, db_project:, filter:)
    pt_project.stories(filter: filter).map do |s|
      db_story = db_project.stories.find_or_create_by(id: s.id)
      db_story.build_story(pt_story: s)
    end .compact
  end

  def build_story(pt_story:)
    comms = Story.sort_comments(pt_coms: pt_story.comments).map do |c|
      { id: c.id, text: c.text, person_id: c.person_id,
        created_at: c.created_at }
    end .compact

    tasks = pt_story.tasks.map do |t|
      { id: t.id, description: t.description, complete: t.complete }
    end .compact

    st = pt_story.to_h.slice(:id, :name, :description, :story_type, :estimate)
    st.merge!(tasks: tasks, comments: comms)
  end

  def self.sort_comments(pt_coms:)
    pt_coms.sort_by { |c| c.created_at } .reverse
  end

  def self.build_comment(com:)
    { id: com.id, text: com.text, person_id: com.person_id,
      created_at: com.created_at }
  end

  def self.add_comment(token:, story_id:, text:)
    client = TrackerApi::Client.new(token: token)
    build_comment(com: client.story(story_id).create_comment(text: text))
    client.story(story_id)
  end
end
