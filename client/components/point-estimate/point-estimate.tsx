import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '~lib/theme';
import VotingView from './point-views';

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
  height: 100%;
  padding-top: 130px;
  padding-left: 25px;
  padding-right: 31px;
  bottom: 0;
  top: 0;
  display: block;
  right: 0;
`;

interface SubTextProps {
  skipVoting?: boolean;
}

const SubText = styled.div<SubTextProps>`
  font-size: 16px;
  color: ${colors.warmGrey};
  opacity: 0.5;
  margin-bottom: ${props => (props.skipVoting ? '5px' : '32px')};
  text-align: center;
`;

SubText.defaultProps = {
  skipVoting: false,
};

const DividerWrapper = styled.svg`
  margin-bottom: ${spacing.l};
  height: 2px;
  width: 100%;
`;

const Divider = () => {
  return (
    <DividerWrapper>
      <rect width="100%" height="1" fill={`${colors.lightGrey}`} />
    </DividerWrapper>
  );
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

const PointEstimate = ({ ptEst }: PointEstimateProps) => (
  <SidebarWrapper>
    <TitleText>What's your estimate?</TitleText>
    <Divider />
    <VotingView points={defaultPoints} />
    <SubText>2 of 4 people have voted</SubText>
    <SubText skipVoting>Skip voting and view results</SubText>
    <ViewResults />
  </SidebarWrapper>
);

export default PointEstimate;
