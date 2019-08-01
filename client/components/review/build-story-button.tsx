import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fontSizes, fonts, colors, spacing } from '~lib/theme';
import { toggleStoryList } from '~redux/actions/toggle-story-list';
import { setStory } from '~redux/actions/story';
import { Story } from '~components/projects/types';

const StoryRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface StoryNumberTextProps {
  isHovering: boolean;
}

const RectangleWrapper = styled.li<StoryNumberTextProps>`
  height: 62px;
  border-radius: 2px;
  background-color: ${colors.charcoal};
  border-color: ${colors.charcoal};
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.large};
  line-height: 1.33;
  color: ${colors.white};
  opacity: ${props => (props.isHovering ? 1 : 0.6)};
  margin-bottom: 5px;
`;

const StoryNumberText = styled.div`
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.large};
  line-height: 1.33;
  color: ${colors.white};
  margin: 18px;
  margin-left: 0px;
`;

const StoryText = styled.div`
  margin-left: ${spacing.l};
  margin-bottom: 5px;
`;

const EstimateBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: #ffca41;
  color: #fece3c;
  text-align: center;
  margin: ${spacing.m};
`;

const EstimateBoxNumber = styled.div`
  font-family: ${fonts.america};
  font-size: ${fontSizes.medium};
  line-height: 1.5;
  color: ${colors.charcoal};
`;

const EmptyEstimateBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  margin: ${spacing.m};
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  margin-top: 5px;
`;

interface Props {
  story: Story;
  index: number;
}

const BuildStoryButton = ({ story, index }: Props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleStoryList());
    dispatch(setStory(story, index + 1));
  };

  const [isHovering, isHoveringToggle] = useState(false);

  return (
    <RectangleWrapper
      isHovering={isHovering}
      onMouseEnter={() => isHoveringToggle(!isHovering)}
      onMouseLeave={() => isHoveringToggle(!isHovering)}
      onClick={onClick}
    >
      <StoryRectangle>
        <StoryNumberText>
          <StoryText>
            {story.name}
            {isHovering && <UnderLine />}
          </StoryText>
        </StoryNumberText>
        {/* {story.estimate ? ( // TODO: this should not be the PT estimate, should be the estimate for that user from the db
          <EstimateBox>
            <EstimateBoxNumber>{story.estimate}</EstimateBoxNumber>
          </EstimateBox>
        ) : (
          <EmptyEstimateBox />
        )} */}
        <EmptyEstimateBox />
      </StoryRectangle>
    </RectangleWrapper>
  );
};

export default BuildStoryButton;
