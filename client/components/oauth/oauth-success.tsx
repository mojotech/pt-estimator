import { History } from 'history';
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useQuery } from 'urql';

import PivotalConnect from '~components/ptconnect/pivotal-connect';

const hasApiToken = `query HasApiToken {
  hasApiToken
}`;

interface Props {
  history: History;
}

const OAuthSuccess = ({ history }: Props) => {
  const store = useStore();
  const state = store.getState();

  const [res] = useQuery({
    query: hasApiToken,
  });

  useEffect(() => {
    if (res.data) {
      if (state.user.email) {
        if (res.data.hasApiToken === true) {
          history.push('/home');
        }
      } else {
        history.push('/');
      }
    }
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>{history.push('/')}</>;
  }

  if (state.user.email) {
    if (res.data.hasApiToken !== true) {
      return <PivotalConnect history={history} />;
    }
  }
  return <>Loading...</>;
};

export default OAuthSuccess;
