import React, { useState } from 'react';
import styled from 'styled-components';

import profileIcon from '~assets/images/profileIcon.png';
import ProjectsDropdown from '~components/projects/projects-dropdown';
import * as Types from '~components/projects/types';
import StoryReviewList from '~components/review/story-review-list';
import StoryReview from '~components/review/story-review-type';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

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
  padding-left: ${spacing.l};
  padding-right: ${spacing.l};
`;

const NavButton = styled.button`
  display: flex;
  color: ${colors.white};
  font-size: ${fontSizes.medium};
  font-family: ${fonts.america};
  align-items: center;
  justify-content: center;
`;

const Projects = styled(NavButton)`
  > img {
    padding: 10px 7px;
  }
`;

interface NotificationProps {
  showStoryList: boolean;
}

const Notifications = styled(NavButton)<NotificationProps>`
  flex-direction: column;
  width: 124px;
  height: 57px;
  background-color: ${props => (props.showStoryList ? colors.warmGrey : colors.charcoal)};
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
  const [showStoryList, toggleStoryList] = useState(false);

  return (
    <>
      <Header>
        <ProjectsDropdown projects={projects} />
        <Notifications
          onClick={() => toggleStoryList(!showStoryList)}
          showStoryList={showStoryList}
        >
          1 of {stories.length}
          <UnderLine />
        </Notifications>
        <NavButton>
          <img src={profileIcon} />
        </NavButton>
      </Header>
      {showStoryList && <StoryReviewList stories={stories} />}
    </>
  );
};

export default NavBar;
