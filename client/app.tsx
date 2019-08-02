import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '~components/Homepage';
import OAuthSuccess from '~components/oauth/oauth-success';
import SignInPage from '~components/oauth/sign-in';

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/success" component={OAuthSuccess} />
        <Route exact path="/" component={SignInPage} />
        <Route path="/home" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
