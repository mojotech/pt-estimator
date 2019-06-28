import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as UrqlProvider, createClient } from 'urql';
import { Provider as ReduxProvider } from 'react-redux';

const client = createClient({
  url: '/graphql',
});

import App from '~/app';
import store from './redux/reducers';

const render = () => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <UrqlProvider value={client}>
        <App />
      </UrqlProvider>
    </ReduxProvider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
