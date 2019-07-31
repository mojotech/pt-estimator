import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { useCookies } from 'react-cookie';

import styled from 'styled-components';
import { setUser } from '~redux/actions/user';

const GoogleSignIn = styled.button`
  width: 243px;
  height: 66px;
  align-self: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  text-align: center;
`;

interface Props {
  history: { push: Function };
}

const OAuth = ({ history }: Props) => {
  const [, setCookie] = useCookies(['jwt']);

  const dispatch = useDispatch();

  const oAuthSuccess = (response: GoogleLoginResponse) => {
    setCookie('jwt', response.getAuthResponse().id_token, { path: '/' });
    dispatch(setUser(response));
    history.push('/success');
  };

  const oAuthFailure = () => {
    history.push('/failure');
  };

  return (
    <Wrapper>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={'Sign in with Google'}
        onSuccess={oAuthSuccess}
        onFailure={oAuthFailure}
        cookiePolicy={'single_host_origin'}
        tag={GoogleSignIn}
      />
    </Wrapper>
  );
};

export default OAuth;
