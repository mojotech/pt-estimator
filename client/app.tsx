import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import OAuth from '~components/oauth/oauth';
import OAuthFailure from '~components/oauth/oauthFailure';
import OAuthSuccess from '~components/oauth/oauthSuccess';

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/failure" component={OAuthFailure} />
        <Route path="/success" component={OAuthSuccess} />
        <Route exact path="/" component={OAuth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
