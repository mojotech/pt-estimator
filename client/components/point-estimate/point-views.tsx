import React from 'react';
import styled from 'styled-components';
import NoSign from '~assets/images/no-sign.svg';
import { PointValue } from '~components/point-estimate/point-estimate';
import { colors, fontSizes, spacing } from '~lib/theme';

interface WithNoEst {
  noEst: boolean;
}

interface WithSelected {
  selected: boolean;
}

interface WithZeroVotes {
  zeroVotes: boolean;
}

type VoteProps = WithNoEst | WithSelected;

const VoteButton = styled.div<VoteProps>`
    height: 60px;
    width: 100%;
    margin-bottom: ${props => (props.noEst ? `${spacing.xl}` : '8px')};
    border: ${props => (props.selected ? 'none' : `solid 1px ${colors.lightGrey}`)};
    background-color: ${props => (props.selected ? '#ffca41' : 'none')}
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.5s;
    &:hover {
      border: ${props => (props.selected ? 'solid 1px #ffca41' : 'solid 1px #fece3c')};
    }
`;

const ResultsButton = styled(VoteButton)<VoteProps | WithZeroVotes>`
  height: 56px;
  width: 56px;
  border: ${props =>
    !props.zeroVotes && !props.selected ? 'solid 2px #fece3c;' : `solid 1px ${colors.lightGrey}`};
`;

const ButtonText = styled.div<WithNoEst | WithZeroVotes>`
  font-size: ${props => (props.noEst ? `${fontSizes.medium}` : '24px')};
  color: ${colors.warmGrey};
  opacity: ${props => (props.zeroVotes ? '0.3' : '1')};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 64px auto;
  min-width: 0;
  min-height: 0;
  grid-column-gap: 16px;
`;

interface NoEstIconProps {
  resview: boolean;
  zeroVotes: boolean;
}

const NoEstIcon = styled(NoSign)<NoEstIconProps>`
  height: 20px;
  width: 19px;
  margin-right: ${props => (props.resview ? '0px' : '11px')};
  opacity: ${props => (props.zeroVotes ? '0.3' : '1')};
`;

interface ProfileProps {
  primary: boolean;
}

const ProfileIcon = styled.circle<ProfileProps>`
  fill: ${colors.warmGrey};
  margin: 0 auto;
  stroke-width: 2px;
  stroke: ${colors.white};
  positon: ${props => (props.primary ? 'absolute' : 'static')};
`;

interface VotingProps {
  points: PointValue[];
  clickEvent: (index) => void;
  estimate: number;
}

export interface UserType {
  id: string;
  vote: string;
}

export const VotingView = ({ points, clickEvent, estimate }: VotingProps) => {
  return (
    <>
      {points.map((point, idx) => {
        // prettier-ignore
        const isNoEst = point === 'Can\'t estimate';
        return (
          <VoteButton noEst={isNoEst} selected={idx === estimate} onClick={() => clickEvent(idx)}>
            {isNoEst ? <NoEstIcon /> : null}
            <ButtonText noEst={isNoEst}>{point}</ButtonText>
          </VoteButton>
        );
      })}
    </>
  );
};

interface VotesProps {
  users: UserType[];
}

// The way svgs work is the last svg put in the code
// is the tag with the highest z-index
// so to reverse the users putting the current in last
// then subtracting the amount needed to overlap
// creates the desired effect
const UserVotes = ({ users }: VotesProps) => {
  const reverse = [...users].reverse();
  return (
    <div style={{ flexDirection: 'row-reverse' }}>
      <svg width="100%" height="50">
        {reverse.map((user, idx, { length }) => {
          return <ProfileIcon cx={(length - idx) * 40} cy="50%" r="24" primary={idx === 0} />;
        })}
      </svg>
    </div>
  );
};

interface ResultsProps {
  points: PointValue[];
  clickEvent: (index) => void;
  estimate: number;
  users: UserType[];
}

export const ResultsView = ({ points, clickEvent, estimate, users }: ResultsProps) => {
  const currentUserVote: UserType = { id: 'cuser', vote: points[estimate] };
  const allUsers = [...users, currentUserVote];
  return (
    <ResultsGrid>
      {points.map((point, idx) => {
        // prettier-ignore
        const isNoEst = point === 'Can\'t estimate';
        const userVotes = allUsers.filter(user => user.vote === point);
        return (
          <>
            <ResultsButton
              noEst={isNoEst}
              selected={idx === estimate}
              zeroVotes={userVotes.length === 0}
              onClick={() => clickEvent(idx)}
            >
              {isNoEst ? <NoEstIcon resview zeroVotes={userVotes.length === 0} /> : null}
              <ButtonText noEst={isNoEst} zeroVotes={userVotes.length === 0}>
                {isNoEst ? null : point}
              </ButtonText>
            </ResultsButton>
            <UserVotes users={userVotes} />
          </>
        );
      })}
    </ResultsGrid>
  );
};
