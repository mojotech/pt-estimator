import React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontSizes } from '~lib/theme';
import LinkArrow from '~assets/images/link-arrow.svg';

const Title = styled.div`
  font-family: ${fonts.neueHass};
  font-size: 30px;
  font-weight: 300;
  line-height: 1.3;
  color: ${colors.black};
  margin-bottom: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 694px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 339px;
`;

const BodyText = styled.div`
  font-family: GT America;
  font-size: ${fontSizes.medium};
  line-height: 1.31;
  color: ${colors.warmGrey};
  margin-bottom: 53px;
`;

const PTLink = styled.a`
  margin-left: auto;
  margin-right: auto;
  &:hover ${LinkBar} {
    fill: #ffca41;
  }
  &:active ${LinkBar} {
    fill: #ffca41;
  }
  &:link {
    text-decoration: none;
  }
`;

const LinkWrapper = styled.div`
  width: 162px;
  &:hover ${LinkBar} {
    fill: #ffca41;
  }
`;

const LinkBar = styled.rect`
transition: fill 0.2s ease;
  fill #e1e1e1;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const LinkText = styled.div`
  opacity: 0.5;
  font-size: 14px;
  color: ${colors.warmGrey};
  margin-right: 8px;
`;

const LinkIcon = styled(LinkArrow)`
  height: 12px;
  width: 12px;
`;

const LinkUnderline = () => (
  <svg width="100%" height="4">
    <LinkBar width="100%" height="2" />
  </svg>
);

const EmptyState = () => {
  return (
    <Wrapper>
      <Column>
        <Title>You don't have any stories to review.</Title>
        <BodyText>
          Use the label "{process.env.PT_LABEL}" in Pivotal Tracker to add stories.
        </BodyText>
        <PTLink href={`https://www.pivotaltracker.com/`} target="_blank">
          <LinkWrapper>
            <ActionWrapper>
              <LinkText>Open Pivotal Tracker</LinkText>
              <LinkIcon />
            </ActionWrapper>
            <LinkUnderline />
          </LinkWrapper>
        </PTLink>
      </Column>
    </Wrapper>
  );
};

export default EmptyState;
