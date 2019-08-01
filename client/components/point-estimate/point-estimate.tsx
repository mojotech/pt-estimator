import React, { useState } from 'react';
import styled from 'styled-components';
import { ResultsView, UserType, VotingView } from '~components/point-estimate/point-views';
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
  height: 100%;
  padding-top: 130px;
  padding-left: 25px;
  padding-right: 31px;
  bottom: 0;
  top: 0;
  display: block;
  right: 0;
`;

const SubText = styled.div`
  font-size: 16px;
  color: ${colors.warmGrey};
  opacity: 0.5;
  margin-bottom: ${spacing.xl};
  text-align: center;
`;

const EstText = styled(SubText)`
  text-align: left;
  opacity: 1;
`;

interface SkipTextProps {
  resView: boolean;
}

const SkipVotingText = styled(SubText)<SkipTextProps>`
  margin-bottom: ${props => (props.resView ? '5px' : '32px')};
`;

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
  <svg width="75%" height="2" style={{ marginBottom: '224px', marginLeft: `${spacing.xxl}` }}>
    <rect width="206" height="2" fill={`${colors.lightGrey}`} />
  </svg>
);

// prettier-ignore
export type PointValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | 'Can\'t estimate';

// prettier-ignore
const defaultPoints: PointValue[] = ['0', '1', '2', '3', '5', '8', 'Can\'t estimate'];

const defaultUser: UserType[] = [
  { id: 'cjoc', vote: '5' },
  { id: 'emul', vote: '3' },
  { id: 'mros', vote: '5' },
  { id: 'ouse', vote: '3' },
];

interface PointEstimateProps {
  ptEst: number;
}

const PointEstimate = ({ ptEst }: PointEstimateProps) => {
  const [estimate, setEstimate] = useState(null);
  const [voted, setVoted] = useState(false);

  const selectPoint = index => {
    setEstimate(index);
    setVoted(true);
  };

  const skipVoting = () => {
    setVoted(true);
  };

  return (
    <SidebarWrapper>
      <TitleText>What's your estimate?</TitleText>
      {voted ? (
        <ResultsView
          points={defaultPoints}
          clickEvent={selectPoint}
          estimate={estimate}
          users={defaultUser}
        />
      ) : (
        <VotingView points={defaultPoints} clickEvent={selectPoint} estimate={estimate} />
      )}
      <SubText>2 of 4 people have voted</SubText>
      {!voted ? (
        <div onClick={skipVoting}>
          <SkipVotingText resView={voted}>Skip voting and view results</SkipVotingText>
          <ViewResults />
        </div>
      ) : (
        <EstText>{`Pivotal Tracker: ${ptEst} points`}</EstText>
      )}
    </SidebarWrapper>
  );
};

export default PointEstimate;
