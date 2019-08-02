import React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

import LinkArrow from '~assets/images/link-arrow-light.svg';
import { Story } from '~components/projects/types';
import BuildStoryButton from '~components/review/build-story-button';

const labelName = 'needs-label';

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

const BottomTextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 40px;
  position: absolute;
  width: 688px;
`;

const MediumText = styled.div`
  opacity: 0.3;
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.medium};
  line-height: 1.31;
  color: ${colors.white};
`;

const OpenPT = styled.div``;

const SmallText = styled.div`
  opacity: 0.3;
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.small};
  line-height: 1.29;
  color: ${colors.white};
  margin-top: 18px;
`;

const DarkUnderLine = styled.div`
  width: 100%;
  margin-top: 5px;
  height: 2px;
  background-color: #393233;
`;

const NumberedList = styled.ol`
  list-style: decimal;
  display: flex;
  flex-direction: column;
  width: 688px;
  margin-left: 24px;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const LinkIcon = styled(LinkArrow)`
  width: 14px;
  height: 14px;
  margin-left: 8px;
`;

interface Props {
  stories: Story[];
}

const StoryReviewList = ({ stories }: Props) => {
  return (
    <Wrapper>
      <Column>
        <Row>
          <Title>You have {stories.length} stories to review.</Title>
          <SmallText>Your Estimate</SmallText>
        </Row>
        <NumberedList>
          {stories.map((story, index) => (
            <BuildStoryButton story={story} index={index} key={story.id} />
          ))}
        </NumberedList>
        <BottomTextRow>
          <MediumText>Use the label "{labelName}" in Pivotal Tracker to add stories.</MediumText>
          <OpenPT>
            <ActionWrapper>
              <MediumText>Open In Pivotal Tracker</MediumText>
              <LinkIcon />
            </ActionWrapper>
            <DarkUnderLine />
          </OpenPT>
        </BottomTextRow>
      </Column>
    </Wrapper>
  );
};

export default StoryReviewList;
