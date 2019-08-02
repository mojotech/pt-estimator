import React from 'react';
import styled from 'styled-components';
import NoSign from '~assets/images/no-sign.svg';
import { PointValue } from '~components/point-estimate/point-estimate';
import { colors, spacing } from '~lib/theme';

interface WithNoEst {
  noEst: boolean;
}

interface WithSelected {
  selected: boolean;
}

type VoteProps = WithNoEst | WithSelected;

const ButtonWrapper = styled.div<VoteProps>`
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

const ButtonText = styled.div<WithNoEst>`
  font-size: ${props => (props.noEst ? '16px' : '24px')};
  color: ${colors.warmGrey};
`;

const NoEstIcon = styled(NoSign)`
  height: 20px;
  width: 19px;
  margin-right: 11.1px;
`;

interface VotingProps {
  points: PointValue[];
  clickEvent: (index) => void;
  estimate: number;
}

const VotingView = ({ points, estimate, clickEvent }: VotingProps) => (
  <>
    {points.map((point, idx) => {
      const isNoEst = point === 'Can\'t estimate';
      return (
        <ButtonWrapper noEst={isNoEst} selected={idx === estimate} onClick={() => clickEvent(idx)}>
          {isNoEst ? <NoEstIcon /> : null}
          <ButtonText noEst={isNoEst}>{point}</ButtonText>
        </ButtonWrapper>
      );
    })}
  </>
);

export default VotingView;
