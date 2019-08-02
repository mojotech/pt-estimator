import React from 'react';
import styled from 'styled-components';
import { Story as StoryType } from '~components/projects/types';
import Description from '~components/story/story-description';
import Details from '~components/story/story-details';
import Tasks from '~components/story/story-tasks';
import { colors, fontSizes, spacing } from '~lib/theme';

const StoryWrapper = styled.div`
  padding-top: 138px;
  padding-left: 138px;
`;

const CommentTitle = styled.div`
  color: #363333;
  font-size: ${fontSizes.medium};
  margin-bottom: 5px;
  margin-left: ${spacing.xxl};
`;

export const CommentDivider = () => (
  <svg width="100%" height="4" style={{ marginBottom: `${spacing.l}`, marginLeft: '83px' }}>
    <rect width="110" height="2" fill={`${colors.lightGrey}`} />
  </svg>
);

interface StoryProps {
  data: StoryType;
}

const Story = ({
  data: { id, name, description, storyType, comments, tasks, labels },
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
