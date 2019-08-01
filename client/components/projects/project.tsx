import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '~redux/reducers';

import StoryPanel from '~components/story-panel';

const Project = () => {
  const currentStory = useSelector((state: ReduxState) => state.story);

  return currentStory.storyPosition != null ? <StoryPanel data={currentStory.story} /> : <></>;
};

export default Project;
