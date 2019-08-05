import { History } from 'history';
import React from 'react';
import { useCookies } from 'react-cookie';
import { GoogleLogout } from 'react-google-login';

interface Props {
  history: History;
}

const LogOut = ({ history }: Props) => {
  const [, , removeCookie] = useCookies(['jwt']);

  const logout = () => {
    removeCookie('jwt');
    history.push('/');
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
  );
};

export default LogOut;
