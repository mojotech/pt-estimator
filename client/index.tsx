import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider, createClient } from 'urql';
import store from '~/store';

const client = createClient({
  url: '/graphql',
});

import App from '~/app';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Provider value={client}>
      <div>
        <span>Hello</span>
        <App message={'from parcel!'} />
      </div>
    </Provider>
  </ReduxProvider>,
  document.getElementById('root')
);
