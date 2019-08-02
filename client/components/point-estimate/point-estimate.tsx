import React, { useState } from 'react';
import styled from 'styled-components';
import VotingView from '~components/point-estimate/point-views';
import { colors, spacing } from '~lib/theme';

const TitleText = styled.div`
  font-size: 24px;
  color: ${colors.black};
  margin-bottom: ${spacing.m};
`;

const SidebarWrapper = styled.div`
  background-color: ${colors.white};
  width: 379px;
  float: right;
  border-left: solid #e7e7e7 1px;
  min-height: 100%;
  padding-top: 130px;
  padding-left: 25px;
  padding-right: 31px;
  bottom: 0;
  top: 0;
  right: 0;
`;

interface SubTextProps {
  skipVoting?: boolean;
}

const SubText = styled.div<SubTextProps>`
  font-size: 16px;
  color: ${colors.warmGrey};
  opacity: 0.5;
  margin-bottom: ${props => (props.skipVoting ? '5px' : `${spacing.xl}`)};
  text-align: center;
`;

SubText.defaultProps = {
  skipVoting: false,
};

const ViewResults = () => (
  <svg width="100%" height="2" style={{ marginBottom: '224px', marginLeft: `${spacing.xxl}` }}>
    <rect width="206" height="2" fill={`${colors.lightGrey}`} />
  </svg>
);

export type PointValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | 'Can\'t estimate';

const defaultPoints: PointValue[] = ['0', '1', '2', '3', '5', '8', 'Can\'t estimate'];

interface PointEstimateProps {
  ptEst: number;
}

const PointEstimate = ({ ptEst }: PointEstimateProps) => {
  const [estimate, setEstimate] = useState(null);

  const selectPoint = index => {
    setEstimate(index);
  };

  return (
    <SidebarWrapper>
      <TitleText>What's your estimate?</TitleText>
      <VotingView points={defaultPoints} clickEvent={selectPoint} estimate={estimate} />
      <SubText>2 of 4 people have voted</SubText>
      <SubText skipVoting>Skip voting and view results</SubText>
      <ViewResults />
    </SidebarWrapper>
  );
};

export default PointEstimate;
