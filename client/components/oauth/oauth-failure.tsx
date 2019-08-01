import { History } from 'history';
import React from 'react';

import OAuth from '~components/oauth/oauth';

interface Props {
  history: History;
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
