import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import OAuth from '~components/oauth';
import OAuthFailure from '~components/oauthFailure';
import OAuthSuccess from '~components/oauthSuccess';

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
