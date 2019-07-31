import React from 'react';
import styled from 'styled-components';

import { fontSizes, colors, spacing } from '~lib/theme';
import profileIcon from '~assets/images/profileIcon.png';
import * as Types from '~components/projects/types';
import ProjectsDropdown from '~components/projects/projects-dropdown';

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

const Notifications = styled(NavButton)`
  flex-direction: column;
`;

const UnderLine = styled.div`
  width: 120%;
  height: 1px;
  background-color: ${colors.white};
  margin-top: 4px;
`;

interface Props {
  projects: Types.Project[];
}

const NavBar = ({ projects }: Props) => {
  return (
    <Header>
      <ProjectsDropdown projects={projects} />
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
