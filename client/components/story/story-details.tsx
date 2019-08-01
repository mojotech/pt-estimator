import React from 'react';
import styled from 'styled-components';
import Bug from '~assets/images/bug-icon.svg';
import Gear from '~assets/images/chore-icon.svg';
import Star from '~assets/images/feature-icon.svg';
import LinkArrow from '~assets/images/link-arrow.svg';
import { Label as LabelType } from '~components/projects/types';
import { colors, fontSizes, spacing } from '~lib/theme';

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 38px;
  margin-left: ${spacing.xl};
  width: 656px;
`;

const FeatureIcon = styled(Star)`
  width: 16px;
  height: auto;
  fill: #ffb251;
  margin-right: ${spacing.s};
`;

const BugIcon = styled(Bug)`
  width: 16px;
  height: auto;
  fill: #ffb251;
  margin-right: ${spacing.s};
`;

const ChoreIcon = styled(Gear)`
  width: 16px;
  height: auto;
  fill: #ffb251;
  margin-right: ${spacing.s};
`;

const NumberText = styled.div`
  font-size: ${fontSizes.medium};
  color: ${colors.charcoal};
  opacity: 0.5;
  margin-right: ${spacing.l};
`;

const Tag = styled.div`
  font-size: ${fontSizes.small};
  color: ${colors.charcoal};
  opacity: 0.5;
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
  width: auto;
  height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 100px;
  border: solid 1px #d3d2d2;
  margin-right: ${spacing.s};
`;

const LinkBar = styled.rect`
transition: fill 0.2s ease;
  fill #e1e1e1;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const LinkWrapper = styled.div`
  width: 162px;
  &:hover ${LinkBar} {
    fill: #ffca41;
  }
`;

const LinkText = styled.div`
  opacity: 0.5;
  font-size: 14px;
  color: #363333;
  margin-right: 8px;
`;
const PTLink = styled.a`
  margin-left: auto;
  margin-right: 0;
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

const ViewPT = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
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

interface IconProps {
  type: string;
}

const TypeIcon = ({ type }: IconProps) => {
  if (type === 'feature') return <FeatureIcon />;
  if (type === 'bug') return <BugIcon />;
  return <ChoreIcon />;
};

interface DetailsProps {
  id: string;
  type: string;
  labels: LabelType[];
}

const Details = ({ id, type, labels }: DetailsProps) => (
  <>
    <DetailsWrapper>
      <TypeIcon type={type} />
      <NumberText>{`#${id}`}</NumberText>
      {labels.map(label => (
        <Tag key={label.id}>{label.name}</Tag>
      ))}
      <PTLink href={`https://www.pivotaltracker.com/story/show/${id}`}>
        <LinkWrapper>
          <ActionWrapper>
            <LinkText>View in Pivotal Tracker</LinkText>
            <LinkIcon />
          </ActionWrapper>
          <LinkUnderline />
        </LinkWrapper>
      </PTLink>
    </DetailsWrapper>
  </>
);

export default Details;
