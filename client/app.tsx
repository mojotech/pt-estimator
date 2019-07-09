import React from 'react';
import { useQuery } from 'urql';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import OAuth from '~components/oauth';
import OAuthFailure from '~components/oauthFailure';
import OAuthSuccess from '~components/oauthSuccess';

const ServerTest = () => {
  const [result] = useQuery({
    query: `{ testField }`,
  });
  const { fetching, data } = result;

  if (fetching) {
    return <p>...loading</p>;
  }

  return <p>{data.testField}</p>;
};

interface Props {
  message: string;
}

const App: React.SFC<Props> = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <p>and...</p>
      <ServerTest />
      <BrowserRouter>
        <Switch>
          <Route path="/failure" component={OAuthFailure} />
          <Route path="/success" component={OAuthSuccess} />
          <Route path="/" component={OAuth} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
