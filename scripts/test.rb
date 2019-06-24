# frozen_string_literal: true

require 'test/unit'
require 'active_support/core_ext/hash/except'

require_relative 'client'
require_relative 'resource'
require_relative 'project_client'

module PTEstimator
  # Test Pivotal Tracker Requests
  class Test < Test::Unit::TestCase
    # rubocop:disable Metrics/MethodLength
    def setup
      @project = ProjectClient.new(
        project_id: '2356735',
        username: 'ptestimator',
        password: 'Pt3st!m4t0r'
      )
      @story_id = '166803883'
      @valid_estimate = 2
      @story = {
        'kind' => 'story',
        'estimate' => @valid_estimate,
        'description' => 'Story description',
        'id' => 166_803_883,
        'created_at' => '2019-06-19T19:27:49Z',
        'story_type' => 'feature',
        'name' => 'Pointing stories proof of concept',
        'current_state' => 'unscheduled',
        'requested_by_id' => 3_192_750,
        'url' => 'https://www.pivotaltracker.com/story/show/166803883',
        'project_id' => 2_356_735,
        'owner_ids' => [],
        'labels' => []
      }
    end
    # rubocop:enable Metrics/MethodLength

    attr_reader :project
    attr_reader :story_id
    attr_reader :valid_estimate
    attr_reader :story

    def test_simple
      # change story desc, change story est, add comment, check it's the same
      # get story by label
      # get stories after/before a release marker
      project.put_to_story(story_id,
                           'estimate' => @valid_estimate,
                           'description' => 'Story description')
      project.post_to_story(story_id, 'comments', 'text' => '1st story comment')
      assert_equal(
        @story,
        project.get_story(story_id: story_id).except!('updated_at')
      )
    end
  end
end
