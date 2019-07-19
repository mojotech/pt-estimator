import React from 'react';
import styled from 'styled-components';

import profileIcon from '~assets/images/profileIcon.png';
import ProjectsDropdown from '~components/projects/projects-dropdown';
import * as Types from '~components/projects/types';
import StoryReviewList from '~components/review/story-review-list';
import StoryReview from '~components/review/story-review-type';
import { colors, fontSizes, spacing } from '~lib/theme';

const stories: StoryReview[] = [
  {
    storyName: 'Properties with existing Tenants attached them can’t be deleted',
    estimateValue: 3,
    storyID: 0,
  },
  { storyName: 'Welcome email (HTML)', estimateValue: 2, storyID: 1 },
  { storyName: 'Make first and last name separate fields', estimateValue: null, storyID: 2 },
  { storyName: 'Admin: edit resident away dates', estimateValue: null, storyID: 3 },
];

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
      <StoryReviewList stories={stories} />
    </Header>
  );
};

export default NavBar;
