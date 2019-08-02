import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment as CommentType } from '~components/projects/types';
import { parseTimeAndDate } from '~lib/datetime';
import { colors, fontSizes, spacing } from '~lib/theme';

const CommentTitle = styled.div`
  color: #363333;
  font-size: ${fontSizes.medium};
  margin-bottom: 5px;
  margin-left: ${spacing.xxl};
  float: left;
`;

const CommentBar = styled.rect<CommentDividerProps>`
  fill: ${props => (props.commentsShown ? '#ffca41' : '#e1e1e1')};
  transition: fill 0.2s ease;
`;

const ShowComments = styled.div`
  display: flex;
  flex-direction: column;
  &:hover ${CommentBar} {
    fill: #ffca41;
  }
`;

const CommentWrapper = styled.div`
  width: 560px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: ${spacing.xxl};
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.l};
`;

const UserName = styled.div`
  color: ${colors.warmGrey};
  opacity: 0.5;
  font-size: ${fontSizes.medium};
`;

const UserProfile = styled.circle`
  fill: #a1a4ad;
  margin: 0 auto;
`;

const CreatedAt = styled.div`
  opacity: 0.5;
  font-size: ${fontSizes.small};
  font-weight: normal;
  line-height: 1.29;
  color: ${colors.warmGrey};
  margin-left: auto;
`;

const CommentText = styled.div`
  font-size: ${fontSizes.medium};
  font-weight: normal;
  font-style: normal;
  line-height: 1.31;
  color: #453d3f;
  margin-bottom: 32px;
`;

interface CommentDividerProps {
  commentsShown: boolean;
}

const CommentDivider = ({ commentsShown }: CommentDividerProps) => (
  <svg
    width="100%"
    height="4"
    style={{ marginBottom: `${spacing.l}`, marginLeft: '83px', float: 'left' }}
  >
    <CommentBar width="110" height="2" commentsShown={commentsShown} />
  </svg>
);

const Divider = () => (
  <svg width="100%" height="2" style={{ marginBottom: '22px' }}>
    <rect width="560" height="1" fill="#d3d2d2" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="32" height="32" style={{ marginRight: '11px' }}>
    <UserProfile cx="50%" cy="50%" r="16" />
  </svg>
);

interface CommentProp {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProp) => {
  const { id, text, personName, createdAt } = comment;
  return (
    <CommentWrapper key={id}>
      <ProfileWrapper>
        <ProfileIcon />
        <UserName>{personName}</UserName>
        <CreatedAt>{parseTimeAndDate(createdAt)}</CreatedAt>
      </ProfileWrapper>
      <CommentText>{text}</CommentText>
      <Divider />
    </CommentWrapper>
  );
};

interface CommentsProps {
  comments: CommentType[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <ShowComments onClick={() => setShowComments(!showComments)}>
        <CommentTitle>{`Comments (${comments.length})`}</CommentTitle>
        <CommentDivider commentsShown={showComments} />
      </ShowComments>
      {showComments && comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </>
  );
};

export default Comments;
