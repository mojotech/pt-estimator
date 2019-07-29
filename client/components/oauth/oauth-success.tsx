import { History } from 'history';
import React from 'react';
import { useStore } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  if (state.user.email) {
    if (res.data.hasApiToken === true) {
      return <Redirect to="/home" />;
    } else {
      return <PivotalConnect />;
    }
  }
  return <>{history.push('/')}</>;
};

export default OAuthSuccess;
