import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fontSizes, colors, spacing, fonts } from '~lib/theme';
import profileIcon from '~assets/images/profileIcon.png';
import ProjectsDropdown from '~components/projects/projects-dropdown';
import * as Types from '~components/projects/types';
import StoryReviewList from '~components/review/story-review-list';
import { toggleStoryList } from '~redux/actions/toggle-story-list';
import { ReduxState } from '~redux/reducers';

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
  padding-bottom: ${spacing.s};
  padding-top: ${spacing.s};

  &:only-child {
    margin-left: auto;
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
  stories: Types.Story[];
}

const NavBar = ({ projects, stories }: Props) => {
  const toggle = useSelector((state: ReduxState) => state.toggleStory.isVisible);
  const storyPosition = useSelector((state: ReduxState) => state.story.storyPosition);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleStoryList());
  };

  return (
    <>
      <Header>
        {projects.length > 0 ? (
          <>
            <ProjectsDropdown projects={projects} />
            <Notifications onClick={onClick} showStoryList={toggle}>
              {storyPosition} of {stories.length}
              <UnderLine />
            </Notifications>
          </>
        ) : null}
        <ProfileImage src={profileIcon} />
      </Header>
      {toggle && <StoryReviewList stories={stories} />}
    </>
  );
};

export default NavBar;
