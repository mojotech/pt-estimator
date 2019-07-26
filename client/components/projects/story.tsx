import React from 'react';

import * as Types from '~components/projects/types';

interface Props {
  data: Types.Story;
}

const Story = ({ data }: Props) => {
  return (
    <>
      <h2>Story {data.id}</h2>
      <h4>ID</h4>
      <p>{data.id}</p>
      <h4>name</h4> <p>{data.name}</p>
      <h4>description</h4>
      <p>{data.description}</p>
      <h4>type</h4>
      <p>{data.storyType}</p>
      <h4>comments</h4>
      {data.comments.map(comment => {
        return (
          <div key={comment.id}>
            <h6>{comment.text} </h6>
            <p>{comment.createdAt}</p>
            <p>person id: {comment.personId}</p>
          </div>
        );
      })}
      <h4>tasks:</h4>
      {data.tasks.map(task => {
        return (
          <div key={task.id}>
            <h6>{task.description}</h6>
            <>{task.complete ? 'complete' : 'not complete'}</>
          </div>
        );
      })}
      <h4>estimate: </h4>
      <p>{data.estimate}</p>
    </>
  );
};

export default Story;
