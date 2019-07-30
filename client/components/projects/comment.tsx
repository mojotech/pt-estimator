import React from 'react';

import { Comment as CommentType } from './types';

interface Props {
  data: CommentType;
}

const Comment = ({ data }: Props) => {
  return (
    <>
      <h6>{data.text} </h6>
      <p>{data.createdAt}</p>
      <p>person id: {data.personId}</p>
    </>
  );
};

export default Comment;
