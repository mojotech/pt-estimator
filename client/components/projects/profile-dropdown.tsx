import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LogOut from '~components/oauth/logout';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';
import { ReduxState } from '~redux/reducers';

const Block = styled.div`
  position: absolute;
  right: 0px;
  top: 56px;
  width: 320px;
  height: 156px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: ${colors.charcoal};
  z-index: 15;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding-bottom: ${spacing.s};
  padding-top: ${spacing.s};
`;

const Divider = styled.div`
  width: 296px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  right: 0px;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-left: 28px;
  margin-bottom: 16px;
`;

const Name = styled.div`
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.medium};
  line-height: 1.31;
  color: ${colors.white};
`;

const Email = styled.div`
  opacity: 0.5;
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.small};
  line-height: 1.29;
  color: ${colors.white};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 16px;
`;

interface Props {
  history: History;
}

const ProfileDropDown = ({ history }: Props) => {
  const user = useSelector((state: ReduxState) => state.user);
  return (
    <Block>
      <ProfileRow>
        <ProfileImage src={user.imgUrl} />
        <Column>
          <Name>
            {user.firstName} {user.lastName}
          </Name>
          <Email>{user.email}</Email>
        </Column>
      </ProfileRow>
      <Divider />
      <LogOut history={history} />
    </Block>
  );
};

export default ProfileDropDown;
