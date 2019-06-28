import React from 'react';

import OAuth from '~components/oauth';

const OAuthFailure = () => (
  <>
    <h2>Wrong credentials, try again</h2>
    <OAuth />
  </>
);

export default OAuthFailure;
