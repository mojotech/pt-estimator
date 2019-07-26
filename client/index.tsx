import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as UrqlProvider, createClient } from 'urql';
import { Provider as ReduxProvider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const client = createClient({
  url: '/graphql',
  fetchOptions: { credentials: 'include' },
});

import App from '~/app';
import store from './redux/reducers';

const render = () => {
  ReactDOM.render(
    <CookiesProvider>
      <ReduxProvider store={store}>
        <UrqlProvider value={client}>
          <App />
        </UrqlProvider>
      </ReduxProvider>
    </CookiesProvider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
