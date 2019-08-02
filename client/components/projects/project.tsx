import React from 'react';

import * as Types from '~components/projects/types';
import StoryPanel from '~components/story-panel';

interface Props {
  data: Types.Project;
}

const Project = ({ data }: Props) => {
  return (
    <>
      {data.stories.length > 0 ? (
        <StoryPanel key={data.stories[0].id} data={data.stories[0]} />
      ) : null}
    </>
  );
};

export default Project;
