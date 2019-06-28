import React from 'react';
import { useStore } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TokenPrompt from '~components/tokenPrompt';

const OAuthSuccess = () => {
  const store = useStore();
  const state = store.getState();
  return state.email ? <TokenPrompt /> : <Redirect to="/failure" />;
};

export default OAuthSuccess;
