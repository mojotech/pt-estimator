import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { setUser } from '../redux/actions/user';
import { setLogin, addAttempt } from '../redux/actions/login';
import { User } from '../redux/types';

function OAuth() {
  const [toHome, setToHome] = useState(false);
  const [toFailure, setToFailure] = useState(false);

  const dispatch = useDispatch();

  function oAuthSuccess(response: GoogleLoginResponse): void {
    const profile = response.getBasicProfile();

    const user: User = {
      id: profile.getId(),
      email: profile.getEmail(),
      name: profile.getName(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      imgUrl: profile.getImageUrl(),
      apiToken: '',
    };
    dispatch(setUser(user));
    dispatch(setLogin({ loggedIn: true, attempts: 0 }));
    setToHome(true);
  }

  function oAuthFailure(response: GoogleLoginResponse | GoogleLoginResponseOffline): void {
    dispatch(addAttempt());
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
