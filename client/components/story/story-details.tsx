import React from 'react';
import styled from 'styled-components';
import { fonts, colors, fontSizes, spacing } from '~lib/theme';
import { Label as LabelType } from '~components/projects/types';
const Star = require('~assets/images/star.svg').default;
const RightUp = require('~assets/images/right-up.svg').default;
const Link = require('~assets/images/link.svg').default;
const LinkArrow = require('~assets/images/link-arrow.svg').default;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 38px;
  margin-left: ${spacing.xl};
  width: 656px;
`;

const FeatureIcon = styled(Star)`
  width: 11.6px;
  height: auto;
  fill: #ffb251;
  margin-right: ${spacing.s};
`;

const TypeText = styled.div`
  color: #ffb251;
  font-size: ${fontSizes.small};
  font-weight: bold;
  margin-right: ${spacing.m};
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

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const LinkWrapper = styled.div`
  margin-left: auto;
  margin-right: 0;
  width: 162px;
`;

const LinkText = styled.div`
  opacity: 0.5;
  font-size: 14px;
  color: #363333;
  margin-right: 8px;
`;

const LinkIcon = styled(LinkArrow)`
  height: 12px;
  width: 12px;
`;

const LinkUnderline = () => (
  <svg width="100%" height="4">
    <rect width="100%" height="2" fill="#e1e1e1" />
  </svg>
);

interface DetailsProps {
  id: string;
  type: string;
  labels: LabelType[];
}

const Details = ({ id, type, labels }: DetailsProps) => (
  <>
    <DetailsWrapper>
      <FeatureIcon />
      <NumberText>{`#${id}`}</NumberText>
      {labels.map(label => (
        <Tag key={label.id}>{label.name}</Tag>
      ))}
      <LinkWrapper>
        <ActionWrapper>
          <LinkText>View in Pivotal Tracker</LinkText>
          <LinkIcon />
        </ActionWrapper>
        <LinkUnderline />
      </LinkWrapper>
    </DetailsWrapper>
  </>
);

export default Details;
