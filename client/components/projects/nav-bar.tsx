import React, { useState } from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';

import ProjectsDropdown from '~components/projects/projects-dropdown';
import * as Types from '~components/projects/types';
import StoryReviewList from '~components/review/story-review-list';
import DropDownIcon from '~assets/images/drop-down.svg';
import { colors, fontSizes, spacing } from '~lib/theme';

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

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-self: center;
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

const DropDown = styled(DropDownIcon)`
  padding-left: 5px;
`;

const UnderLine = styled.div`
  width: 120%;
  height: 1px;
  background-color: ${colors.white};
  margin-top: 4px;
`;

interface Props {
  projects: Types.Project[];
  stories: Types.Story[];
}

const NavBar = ({ projects, stories }: Props) => {
  const [showStoryList, toggleStoryList] = useState(false);
  const state = useStore().getState();

  const storyReviews = [];
  stories.forEach(story => {
    storyReviews.push({ storyName: story.name, estimateValue: null, storyID: story.id });
  }); // TODO: get estimate value from the database migration to add estimates

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
        <ProfileImage src={state.user.imgUrl} />
      </Header>
      {showStoryList && <StoryReviewList collection={storyReviews} />}
    </>
  );
};

export default NavBar;
