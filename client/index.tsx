import React from 'react'
import ReactDOM from 'react-dom'

import App from '~/app';

ReactDOM.render(
  <div><span>Hello</span><App message={'from parcel!'} /></div>,
  document.getElementById('root'),
)
