import React, { useState, useRef } from 'react';
import { useStore } from 'react-redux';
import { useQuery } from 'urql';

import Homepage from '~components/Homepage';

const validateToken = `query validateToken($email: String!, $token: String!){
  validity(email: $email, token: $token)
}`;

const TokenPrompt = () => {
  const state = useStore().getState();

  const [token, setToken] = useState();
  const tokenRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    event.preventDefault();
    setToken(tokenRef.current.value);
  };

  const [res] = useQuery({
    query: validateToken,
    variables: {
      email: state.email,
      token: token,
    },
  });

  if (res.data && res.data.validity) {
    return <Homepage />;
  }

  return (
    <form onSubmit={onSubmit}>
      <input required ref={tokenRef} />
      <input type="submit" />
    </form>
  );
};

export default TokenPrompt;
