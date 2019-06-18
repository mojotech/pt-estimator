# frozen_string_literal: true

require_relative '../scripts/stories_poc'
require 'test/unit'

# Test script for story retrieval and pointing
class StoriesPocTest < Test::Unit::TestCase
  # rubocop:disable Metrics/MethodLength
  def setup
    @username = 'ptestimator'
    @password = 'Pt3st!m4t0r'
    @proj_id = '2356735'
    @story_id = '166803883'

    @story_list = [
      {
        'kind' => 'story',
        'id' => 166_803_984,
        'created_at' => '2019-06-19T19:32:28Z',
        'updated_at' => '2019-06-19T19:32:28Z',
        'story_type' => 'feature',
        'name' => 'Another story to test lists',
        'current_state' => 'unscheduled',
        'requested_by_id' => 3_192_750,
        'url' => 'https://www.pivotaltracker.com/story/show/166803984',
        'project_id' => 2_356_735, 'owner_ids' => [], 'labels' => []
      },
      {
        'kind' => 'story', 'id' => 166_803_883,
        'created_at' => '2019-06-19T19:27:49Z',
        'updated_at' => '2019-06-19T19:27:49Z',
        'story_type' => 'feature',
        'name' => 'Pointing stories proof of concept',
        'current_state' => 'unscheduled',
        'requested_by_id' => 3_192_750,
        'url' => 'https://www.pivotaltracker.com/story/show/166803883',
        'project_id' => 2_356_735,
        'owner_ids' => [],
        'labels' => []
      }
    ]
  end

  attr_reader :username
  attr_reader :password
  attr_reader :proj_id
  attr_reader :story_id
  attr_reader :story_list

  # rubocop:disable Metrics/AbcSize
  def test_simple
    assert_equal(story_list,
                 get_story(proj_id, uname: username, password: password))
    assert_equal(story_list.last,
                 get_story(proj_id, story_id: story_id,
                                    uname: username, password: password))
    assert_equal(story_list.last,
                 put_story_estimate(proj_id, story_id, 2,
                                    uname: username, password: password))
    assert_equal('Estimate of 4 not allowed in point scale',
                 put_story_estimate(proj_id, story_id, 4,
                                    uname: username, password: password))
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
end
