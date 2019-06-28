import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createClient } from 'urql';

const client = createClient({
  url: '/graphql',
});

import App from '~/app';

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root')
);
