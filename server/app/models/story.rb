# frozen_string_literal: true

class Story < ApplicationRecord
  belongs_to :project
  has_many :estimates, dependent: :destroy

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

    remove_review = pt_story.labels.reject{ |l| l.name == ENV['PT_LABEL']}
    labels = remove_review.map do |l|
      {id: l.id, name: l.name}
    end .compact          

    st = pt_story.to_h.slice(:id, :name, :description, :story_type, :estimate)
    st.merge!(tasks: tasks, comments: comms, labels: labels, user_estimates: self.estimates)
  end

  def self.save_estimate(story_id:, point_value:, user_email:)
    user = User.find_by(email: user_email)
    return { message: 'User not found' } if user.nil?

    story = Story.find_by(id: story_id)
    return { message: 'Story not found' } if story.nil?

    if valid_point_value?(point_value: point_value, story: story, user: user)
      est = user.estimates.find_by(story_id: story_id, user_id: user.id)
      if est.nil?
      est = user.estimates.create!(story_id: story_id, user_id: user.id, point_value: point_value)
      else
        est.update(point_value: point_value)
      end
      
      est
    else 
      { message: 'Invalid point value for this project\'s schema' }
    end
  end

  def self.valid_point_value?(point_value:, story:, user:)
    project_id = story[:project_id]
    token = user[:api_token]
    Project.get_valid_estimates(token: token, project_id: project_id)
           .include?(point_value)
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
  
  def self.get_story_estimates(story_id:)
    story = Story.find_by(id: story_id)
    story&.estimates
  end
end
