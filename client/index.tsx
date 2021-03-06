import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { Client, Provider as UrqlProvider } from 'urql';
import App from '~/app';
import store, { ReduxState } from './redux/reducers';

const createClient = () =>
  new Client({ url: '/graphql', fetchOptions: { credentials: 'include' } });

const AppClient: React.SFC = () => {
  const email = useSelector((state: ReduxState) => state.user.email);
  const client = useMemo(createClient, [email]);
  return (
    <UrqlProvider value={client}>
      <App />
    </UrqlProvider>
  );
};

const Main: React.SFC = () => (
  <ReduxProvider store={store}>
    <AppClient />
  </ReduxProvider>
);
ReactDOM.render(<Main />, document.getElementById('root'));
