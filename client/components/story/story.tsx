import React from 'react';
import styled from 'styled-components';
import Description from '~components/story/story-description';
import Tasks from '~components/story/story-tasks';
import Details from '~components/story/story-details';
import Comments from '~components/story/story-comment';
import { Story as StoryType } from '~components/projects/types';

const StoryWrapper = styled.div`
  padding-top: 138px;
  padding-left: 138px;
`;

interface StoryProps {
  projectId: string;
  data: StoryType;
}

const Story = ({
  projectId,
  data: { id, name, description, storyType, comments, tasks, labels, estimate },
}: StoryProps) => {
  return (
    <>
      <StoryWrapper>
        <Details id={id} type={storyType} labels={labels} />
        <Description title={name} text={description} />
        <Tasks tasks={tasks} />
        <Comments storyId={id} projectId={projectId} comments={comments} />
      </StoryWrapper>
    </>
  );
};

export default Story;
