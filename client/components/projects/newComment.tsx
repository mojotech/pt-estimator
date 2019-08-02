import React, { useRef } from 'react';
import { useStore } from 'react-redux';
import { useMutation } from 'urql';

const addComment = `mutation AddComment($storyId: String!, $text: String!) {
  createComment(storyId: $storyId, text: $text) {
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

interface Props {
  storyId: string;
}

const NewComment = ({ storyId }: Props) => {
  const state = useStore().getState();

  const commentRef = useRef<HTMLInputElement>(null);

  const [, executeMutation] = useMutation(addComment);

  const onSubmit = event => {
    event.preventDefault();
    executeMutation({ storyId, text: commentRef.current.value });
    commentRef.current.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Add a comment to this story" required ref={commentRef} />
      <input type="submit" />
    </form>
  );
};

export default NewComment;
