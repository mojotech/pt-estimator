import React from 'react';

import Projects from '~components/projects/projects';

interface Props {
  token: string;
}

const Homepage = ({ token }: Props) => (
  <>
    <>Token successful, now in Homepage</>
    <Projects token={token} />
  </>
);

export default Homepage;
