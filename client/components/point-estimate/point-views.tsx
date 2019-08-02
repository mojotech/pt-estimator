import React from 'react';
import styled from 'styled-components';
import NoSign from '~assets/images/no-sign.svg';
import { PointValue } from '~components/point-estimate/point-estimate';
import { colors } from '~lib/theme';

interface ButtonStyleProps {
  noEst: boolean;
}

const ButtonWrapper = styled.div<ButtonStyleProps>`
  height: 60px;
  width: 100%;
  margin-bottom: ${props => (props.noEst ? '32px' : '8px')};
  border: solid 1px ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.div<ButtonStyleProps>`
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
}

const VotingView = ({ points }: VotingProps) => (
  <>
    {points.map(num => {
      const isNoEst = num === 'Can\'t estimate';
      return (
        <ButtonWrapper noEst={isNoEst}>
          {isNoEst ? <NoEstIcon /> : null}
          <ButtonText noEst={isNoEst}>{num}</ButtonText>
        </ButtonWrapper>
      );
    })}
  </>
);

export default VotingView;
