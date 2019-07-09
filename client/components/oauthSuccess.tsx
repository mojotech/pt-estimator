import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useQuery } from 'urql';
import { omit } from 'ramda';

import { setToken } from '../redux/actions/user';
import TokenPrompt from '~components/tokenPrompt';
import Homepage from '~components/Homepage';

const fetchUser = `
query FetchUser($data: UserInput!){
  fetchUser(data: $data){
    email
    firstName
    id
    imgUrl
    lastName
    name
    apiToken
  }
}
`;

function OAuthSuccess() {
  const store = useStore();
  const state = store.getState();
  const dispatch = useDispatch();

  const [res] = useQuery({
    query: fetchUser,
    variables: { data: omit(['id', 'apiToken'], state.userReducer) },
  });

  if (res.fetching) {
    return <>Loading...</>;
  } else if (res.error) {
    return <>Error</>;
  } else if (res.data.fetchUser.apiToken) {
    // dispatch(setToken(res.data.fetchUser.apiToken));
  }

  return state.loginReducer.loggedIn ? (
    res.data.fetchUser.apiToken ? (
      <Homepage />
    ) : (
      <TokenPrompt />
    )
  ) : (
    <Redirect to="/failure" />
  );
}

export default OAuthSuccess;
