import { History } from 'history';
import React from 'react';
import styled from 'styled-components';
import OAuth from '~components/oauth/oauth';
import { colors, fonts, fontSizes } from '~lib/theme';

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
  width: 452px;
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

interface Props {
  history: History;
}

const SignInPage = ({ history }: Props) => {
  return (
    <Wrapper>
      <Column>
        <Title>Sign In</Title>
        <BodyText>To get started with Estimator, log in with your Google account.</BodyText>
        <OAuth history={history} />
      </Column>
    </Wrapper>
  );
};

export default SignInPage;
