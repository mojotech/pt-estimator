import React from 'react';
import styled from 'styled-components';
import EstimateSelect from '~components/point-estimate/estimate-select';
import { Story as StoryType } from '~components/projects/types';
import * as Types from '~components/projects/types';
import Description from '~components/story/story-description';
import Details from '~components/story/story-details';
import Tasks from '~components/story/story-tasks';
import { colors, fontSizes, spacing } from '~lib/theme';

import { useSelector } from 'react-redux';
import { ReduxState } from '~redux/reducers';

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

const Story = ({ data }: StoryProps) => {
  const currentStory = useSelector((state: ReduxState) => state.story);
  return (
    <>
      <StoryWrapper>
        <Details id={data.id} type={data.storyType} labels={data.labels} />
        <Description title={data.name} text={data.description} />
        <Tasks tasks={data.tasks} />
        <CommentTitle>{`Comments (${data.comments.length})`}</CommentTitle>
        <CommentDivider />
        {currentStory.story.userEstimates.map((est: Types.Estimate) => {
          return (
            <div key={est.id}>
              <h4>User estimates</h4>
              <p>user: {est.userId}</p>
              <p>estimate: {est.pointValue}</p>
            </div>
          );
        })}
        <EstimateSelect story={data} />
      </StoryWrapper>
    </>
  );
};

export default Story;
