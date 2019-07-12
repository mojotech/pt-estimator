import React from 'react';

import OAuth from '~components/oauth/oauth';

interface Props {
  history: { push: Function };
}

const OAuthFailure = ({ history }: Props) => {
  return (
    <>
      Wrong credentials, try again
      <OAuth history={history} />
    </>
  );
};

export default OAuthFailure;
