import React, { useState } from 'react';
import styled from 'styled-components';
import PTtoEstimator from '~assets/images/PTtoEstimator.png';
import QuestionCircle from '~assets/images/question-circle.svg';
import RightUpArrow from '~assets/images/right-up.svg';
import APIExplanation from '~components/ptconnect/api-token-explanation';
import PivotalInputField from '~components/ptconnect/pivotal-input-field';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

const TopBox = styled.div`
  width: 256px;
  height: 192px;
  background-color: #f0f0f0;
  align-self: center;
  margin-top: 74px;
`;

const BoxImage = styled.img`
  width: 114px;
  height: 53px;
  align-self: center;
  margin-top: 68px;
`;

const Title = styled.div`
  font-family: ${fonts.neueHass};
  font-size: 30px;
  font-weight: 300;
  margin-top: ${spacing.xl};
  margin-bottom: ${spacing.m};
`;

const BodyText = styled.div`
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.medium};
  line-height: 1.31;
  color: #342c2e;
`;

const TokenApperanaceText = styled.div`
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.medium};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 452px;
`;

const UnderLine = styled.div`
  width: 275px;
  height: 2px;
  background-color: ${colors.lightGrey};
  align-self: center;
  margin-top: 5px;
`;

const ProfileUnderLine = styled.div`
  width: 142px;
  height: 2px;
  background-color: ${colors.lightGrey};
  align-self: center;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextButton = styled.button`
  border-color: #fafafa;
  background-color: #fafafa;
  margin-top: ${spacing.xl};
  margin-bottom: ${spacing.l};
  align-self: center;
`;

const RightUp = styled(RightUpArrow)`
  width: 14px;
  height: 14px;
  margin-left: 8px;
`;

const HelpButton = styled(QuestionCircle)`
  margin-right: 6px;
`;

const PivotalConnect = () => {
  const [showExplanation, toggleExplanationVisibility] = useState(false);

  return (
    <Wrapper>
      <Column>
        <TopBox>
          <BoxImage src={PTtoEstimator} />
        </TopBox>
        <Title>Connect to Pivotal Tracker</Title>
        <BodyText>
          To get started with Estimator, enter your account API token below. You can find your token
          in your account profile
        </BodyText>
        <TextButton>
          <TokenApperanaceText>
            Open my profile
            <RightUp />
          </TokenApperanaceText>
          <ProfileUnderLine />
        </TextButton>
        <PivotalInputField />
        <TextButton onClick={() => toggleExplanationVisibility(!showExplanation)}>
          <TokenApperanaceText>
            <HelpButton />
            What does my API token look like?
          </TokenApperanaceText>
          <UnderLine />
        </TextButton>
        {showExplanation && <APIExplanation />}
      </Column>
    </Wrapper>
  );
};

export default PivotalConnect;
