import React from 'react';
import { useStore } from 'react-redux';
import { useQuery } from 'urql';

import OAuth from '~/components/oauth/oauth';
import TokenPrompt from '~components/oauth/token-prompt';
import Homepage from '~components/Homepage';

const hasApiToken = `query HasApiToken {
  hasApiToken
}`;

interface Props {
  history: { push: Function };
}

const OAuthSuccess = ({ history }: Props) => {
  const store = useStore();
  const state = store.getState();

  const [res] = useQuery({
    query: hasApiToken,
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  if (state.email) {
    if (res.data.hasApiToken === true) {
      return <Homepage />;
    } else {
      return <TokenPrompt />;
    }
  }
  return <OAuth history={history} />;
};

export default OAuthSuccess;
