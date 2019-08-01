import React from 'react';
import { useStore } from 'react-redux';
import { useQuery } from 'urql';

import OAuth from '~/components/oauth/oauth';
import Homepage from '~components/Homepage';
import TokenPrompt from '~components/oauth/token-prompt';

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

  if (state.user.email) {
    if (res.data.hasApiToken === true) {
      return <Homepage />;
    } else {
      return <TokenPrompt />;
    }
  }
  return <OAuth history={history} />;
};

export default OAuthSuccess;
