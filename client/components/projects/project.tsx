import React from 'react';

import * as Types from '~components/projects/types';
import Story from '~components/projects/story';

interface Props {
  data: Types.Project;
}

const Project = ({ data }: Props) => {
  return (
    <>
      <h1>Project {data.id}</h1>
      {data.stories.map(story => (
        <Story key={story.id} data={story} />
      ))}
    </>
  );
};

export default Project;