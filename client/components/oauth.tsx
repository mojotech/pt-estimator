import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

function OAuth() {
  const [toHome, setToHome] = useState(false);
  const [toFailure, setToFailure] = useState(false);

  function oAuthSuccess(response: GoogleLoginResponse): void {
    setToHome(true);
  }

  function oAuthFailure(
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void {
    setToFailure(true);
  }

  return (
    <>
      {toHome && <Redirect to="/success" />}
      {toFailure && <Redirect to="/failure" />}

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={'Login'}
        onSuccess={oAuthSuccess}
        onFailure={oAuthFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default OAuth;
