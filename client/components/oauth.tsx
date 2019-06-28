import React from 'react';
import { GoogleLogin } from 'react-google-login';

interface Props {
  history: { push: Function };
}

const OAuth = ({ history }: Props) => {
  const oAuthSuccess = () => {
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
