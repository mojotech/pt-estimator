import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '~redux/reducers';

import StoryPanel from '~components/story-panel';

interface ProjectProps {
  projectId: string;
}

const Project = ({ projectId }: ProjectProps) => {
  const currentStory = useSelector((state: ReduxState) => state.story);

  return currentStory.storyPosition != null ? (
    <StoryPanel projectId={projectId} key={currentStory.story.id} data={currentStory.story} />
  ) : (
    <></>
  );
};

export default Project;
