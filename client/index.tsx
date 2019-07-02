import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createClient } from 'urql';

const client = createClient({
  url: '/graphql',
});

import App from '~/app';

ReactDOM.render(
  <Provider value={client}>
    <div>
      <span>Hello</span>
      <App message={'from parcel!'} />
    </div>
  </Provider>,
  document.getElementById('root')
);
