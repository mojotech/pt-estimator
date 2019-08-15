import { History } from 'history';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ProfileDropDown from '~components/projects/profile-dropdown';
import ProjectsDropdown from '~components/projects/projects-dropdown';
import * as Types from '~components/projects/types';
import StoryReviewList from '~components/review/story-review-list';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';
import { toggleStoryList } from '~redux/actions/toggle-story-list';
import { ReduxState } from '~redux/reducers';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.charcoal};
  padding-left: ${spacing.l};
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
  padding-bottom: 12px;
  padding-top: 12px;
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

const Profile = styled.button`
  width: 80px;
  height: 57px;
  background-color: ${colors.charcoal};
  text-align: center;
  outline: none;
  :hover {
    background-color: ${colors.warmGrey};
  }
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
  history: History;
}

const NavBar = ({ projects, stories, history }: Props) => {
  const image = useSelector((state: ReduxState) => state.user.imgUrl);
  const toggle = useSelector((state: ReduxState) => state.toggleStory.isVisible);
  const storyPosition = useSelector((state: ReduxState) => state.story.storyPosition);
  const [isProfileShowing, setProfileVisibility] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleStoryList());
  };

  if (toggle && isProfileShowing) {
    setProfileVisibility(false);
  }

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
        <Profile onClick={() => setProfileVisibility(!isProfileShowing)}>
          <ProfileImage src={image} />
        </Profile>
      </Header>
      {isProfileShowing && <ProfileDropDown history={history} />}
      {toggle && <StoryReviewList stories={stories} />}
    </>
  );
};

export default NavBar;
