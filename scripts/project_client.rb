# frozen_string_literal: true

module PTEstimator
  # Constructs a payload from Pivotal Tracker Project Resources
  class ProjectClient
    def initialize(project_id:, username:, password:)
      @project_id = project_id
      @http_client = Client.new(username: username, password: password)
    end

    def get_story(story_id: nil, sect: nil)
      story = Resource.new(
        url: "/services/v5/projects/#{@project_id}/stories/#{story_id}/#{sect}"
      )
      @http_client.get(story.to_request)
    end

    def put_to_story(story_id, params)
      story = Resource.new(
        url: "/services/v5/projects/#{@project_id}/stories/#{story_id}",
        attributes: params
      )
      @http_client.put(story.to_request)
    end

    def post_to_story(story_id, sect, params)
      story = Resource.new(
        url: "/services/v5/projects/#{@project_id}/stories/#{story_id}/" + sect,
        attributes: params
      )
      @http_client.post(story.to_request)
    end
  end
end
