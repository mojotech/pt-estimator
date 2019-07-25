import React, { useState } from 'react';
import styled from 'styled-components';
import StoryReview from '~components/review/story-review-type';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

const Wrapper = styled.div`
  position: absolute;
  top: 57px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  background-color: ${colors.charcoal};
  align-self: center;
  justify-content: center;
  z-index 10;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 728px;
`;

const Title = styled.div`
  opacity: 0.5;
  font-family: ${fonts.neueHass};
  font-size: 30px;
  font-weight: 300;
  line-height: 1.3;
  color: ${colors.white};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 74px;
  margin-bottom: ${spacing.m};
`;

const SmallText = styled.div`
  opacity: 0.3;
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.small};
  line-height: 1.29;
  color: ${colors.white};
  margin-top: 18px;
`;

const StoryRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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

interface StoryNumberTextProps {
  isHovering: boolean;
}

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

const NumberedList = styled.ol`
  list-style: decimal;
  display: flex;
  flex-direction: column;
  width: 688px;
  margin-left: 24px;
`;

interface StoryArrayTypeProps {
  stories: StoryReview[];
}

const StoryReviewList = (storyArray: StoryArrayTypeProps) => {
  return (
    <Wrapper>
      <Column>
        <Row>
          <Title>You have {storyArray.stories.length} stories to review.</Title>
          <SmallText>Your Estimate</SmallText>
        </Row>
        <NumberedList>
          {storyArray.stories.map(story => (
            <StoryButton {...story} key={story.storyID} />
          ))}
        </NumberedList>
      </Column>
    </Wrapper>
  );
};

const StoryButton = (story: StoryReview) => {
  const [isHovering, isHoveringToggle] = useState(false);
  return (
    <RectangleWrapper
      isHovering={isHovering}
      onMouseEnter={() => isHoveringToggle(!isHovering)}
      onMouseLeave={() => isHoveringToggle(!isHovering)}
    >
      <StoryRectangle>
        <StoryNumberText>
          <StoryText>
            {story.storyName}
            {isHovering && <UnderLine />}
          </StoryText>
        </StoryNumberText>
        {story.estimateValue ? (
          <EstimateBox>
            <EstimateBoxNumber>{story.estimateValue}</EstimateBoxNumber>
          </EstimateBox>
        ) : (
          <EmptyEstimateBox />
        )}
      </StoryRectangle>
    </RectangleWrapper>
  );
};

export default StoryReviewList;
