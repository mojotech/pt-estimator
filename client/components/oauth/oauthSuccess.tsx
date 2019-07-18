import React from 'react';
import { useStore } from 'react-redux';
import { useQuery } from 'urql';

import OAuth from '~/components/oauth/oauth';
import TokenPrompt from '~components/oauth/tokenPrompt';
import Homepage from '~components/Homepage';

const fetchUser = `query FetchUser($data: UserInput!){
  fetchUser(data: $data){
    apiToken
    email
    firstName
    imgUrl
    lastName
    name
  }
}`;

interface Props {
  history: { push: Function };
}

const OAuthSuccess = ({ history }: Props) => {
  const store = useStore();
  const state = store.getState();

  const [res] = useQuery({
    query: fetchUser,
    variables: { data: state },
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  if (state.email) {
    if (res.data.fetchUser.apiToken) {
      return <Homepage />;
    } else {
      return <TokenPrompt />;
    }
  } else {
    return <OAuth history={history} />;
  }
};

export default OAuthSuccess;
