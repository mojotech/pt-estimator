import { History } from 'history';
import React from 'react';
import { useCookies } from 'react-cookie';
import { GoogleLogout } from 'react-google-login';
import styled from 'styled-components';

import LogOutIcon from '~assets/images/logout.svg';
import { colors, fonts, fontSizes } from '~lib/theme';

const LogoutText = styled.div`
  font-family: ${fonts.neueHass};
  margin-left: 9px;
  font-size: ${fontSizes.small};
  line-height: 1.29;
  color: ${colors.white};
`;

const LogoutIcon = styled(LogOutIcon)`
  width: 16px;
  height: 16px;
  margin-top: 1px;
  margin-left: 4px;
`;

const LogoutButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 59px;
  background-color: ${colors.charcoal};
  :hover {
    background-color: ${colors.warmGrey};
  }
`;

const LogoutRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

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
      render={renderProps => (
        <LogoutButton onClick={renderProps.onClick}>
          <LogoutRow>
            <LogoutIcon />
            <LogoutText>Logout</LogoutText>
          </LogoutRow>
        </LogoutButton>
      )}
    />
  );
};

export default LogOut;
