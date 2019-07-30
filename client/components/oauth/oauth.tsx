import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { useCookies } from 'react-cookie';

import { setUser } from '~redux/actions/user';

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
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText={'Login'}
      onSuccess={oAuthSuccess}
      onFailure={oAuthFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default OAuth;
