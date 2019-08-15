import React, { useRef } from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';
import { useMutation } from 'urql';
import RightArrow from '~assets/images/right-arrow-full.svg';
import { colors, fontSizes, spacing } from '~lib/theme';

const addComment = `mutation AddComment($storyId: String!, $projectId: String! $text: String!) {
  createComment(storyId: $storyId, projectId: $projectId, text: $text) {
    ... on Story {
      comments {
        createdAt
        id
        personName
        text
      }
    }
    ... on Error {
      code
      error
      kind
      possibleFix
    }
  }
}`;

const CommentForm = styled.form`
  margin-left: ${spacing.xxl};
  margin-bottom: 38px;
  width: 560px;
`;

const FormSubmit = styled.button`
  outline: none;
  width: 60px;
  height: 60px;
  border: solid 1px #d3d2d2;
  display: block;
  :hover {
    background-color: #ffca41;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const FormText = styled.input`
  outline: none;
  font-size: ${fontSizes.medium}
  opacity: 0.5;
  font-weight: normal;
  line-height: 1.31;
  color: ${colors.warmGrey};
  width: 500px;
  height: 60px;
  border: solid 1px #d3d2d2;
  padding-left: ${spacing.m}
  &:focus {
    opacity: 1;
    &::-webkit-input-placeholder {
      opacity: 0;
    }
  } 
  &:focus ~ ${FormSubmit} {
    background-color: #ffca41;
  }
`;

const SubmitIcon = styled(RightArrow)`
  height: 18px;
  width: 18px;
`;

interface Props {
  projectId: string;
  storyId: string;
}

const NewComment = ({ storyId, projectId }: Props) => {
  const state = useStore().getState();

  const commentRef = useRef<HTMLInputElement>(null);

  const [, executeMutation] = useMutation(addComment);

  const onSubmit = event => {
    event.preventDefault();
    executeMutation({
      storyId,
      projectId,
      text: commentRef.current.value,
    });
    commentRef.current.value = '';
  };

  return (
    <CommentForm onSubmit={onSubmit}>
      <InputWrapper>
        <FormText placeholder="Post a new comment" ref={commentRef} />
        <label>
          <FormSubmit type="submit" value="">
            <SubmitIcon />
          </FormSubmit>
        </label>
      </InputWrapper>
    </CommentForm>
  );
};

export default NewComment;
