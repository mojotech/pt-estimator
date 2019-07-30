import React from 'react';
import styled from 'styled-components';
import Description from '~components/story/story-description';
import Tasks from '~components/story/story-tasks';
import Details from '~components/story/story-details';
import { fontSizes, spacing } from '~lib/theme';
import { Story as StoryType } from '~components/projects/types';

const StoryWrapper = styled.div`
  padding-top: 138px;
  padding-left: 138px;
`;

const CommentTitle = styled.div`
  color: #363333;
  font-size: ${fontSizes.medium};
  margin-bottom: 5px;
  margin-left: ${spacing.xl};
`;

export const CommentDivider = () => (
  <svg width="100%" height="4" style={{ marginBottom: `${spacing.l}`, marginLeft: '83px' }}>
    <rect width="110" height="2" fill="#e1e1e1" />
  </svg>
);

interface StoryProps {
  data: StoryType;
}

const Story = ({
  data: { id, name, description, storyType, comments, tasks, labels, estimate },
}: StoryProps) => {
  return (
    <>
      <StoryWrapper>
        <Details id={id} type={storyType} labels={labels} />
        <Description title={name} text={description} />
        <Tasks tasks={tasks} />
        <CommentTitle>{`Comments (${comments.length})`}</CommentTitle>
        <CommentDivider />
      </StoryWrapper>
    </>
  );
};

export default Story;
