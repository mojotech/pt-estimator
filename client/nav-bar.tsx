import React from 'react';
import styled from 'styled-components';
import { fontSizes, colors, spacing } from '~lib/theme';
import profileIcon from '~assets/images/profileIcon.png';
import dropDown from '~assets/images/dropDown.svg';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.charcoal};
  padding: 12px ${spacing.l};
`;

const NavButton = styled.button`
  display: flex;
  color: ${colors.white};
  font-size: ${fontSizes.medium};
  font-family: GT America;
  align-items: center;
  justify-content: center;
`;

const Projects = styled(NavButton)`
  > img {
    padding: 10px 7px;
  }
`;

const Notifications = styled(NavButton)`
  flex-direction: column;
`;

const DropDown = styled(dropDown)`
  padding-left: 5px;
`;

const UnderLine = styled.div`
  width: 120%;
  height: 1px;
  background-color: ${colors.white};
  margin-top: 4px;
`;

const NavBar = () => {
  return (
    <Header>
      <Projects>
        <span>Daydream</span>
        <DropDown />
      </Projects>
      <Notifications>
        1 of 7
        <UnderLine />
      </Notifications>
      <NavButton>
        <img src={profileIcon} />
      </NavButton>
    </Header>
  );
};

export default NavBar;
