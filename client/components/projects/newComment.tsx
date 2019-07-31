import React, { useRef } from 'react';
import { useMutation } from 'urql';
import { useStore } from 'react-redux';

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

interface Props {
  projectId: string;
  storyId: String;
}

const NewComment = ({ storyId, projectId }: Props) => {
  const state = useStore().getState();

  const commentRef = useRef<HTMLInputElement>(null);

  const [, executeMutation] = useMutation(addComment);

  const onSubmit = event => {
    event.preventDefault();
    executeMutation({
      storyId: storyId,
      projectId: projectId,
      text: commentRef.current.value,
    });
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
