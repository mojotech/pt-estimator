import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';

import { setUser } from '~redux/actions/user';

interface Props {
  history: { push: Function };
}

const OAuth = ({ history }: Props) => {
  const dispatch = useDispatch();

  const oAuthSuccess = (response: GoogleLoginResponse) => {
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
