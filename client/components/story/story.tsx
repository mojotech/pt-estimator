import React from 'react';
import styled from 'styled-components';
import { Story as StoryType } from '~components/projects/types';
import Comments from '~components/story/story-comment';
import Description from '~components/story/story-description';
import Details from '~components/story/story-details';
import Tasks from '~components/story/story-tasks';

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
  data: { id, name, description, storyType, comments, tasks, labels },
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
