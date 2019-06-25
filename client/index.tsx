import React from 'react'
import ReactDOM from 'react-dom'

import App from '~/app';

ReactDOM.render(
  <div><span>Hello</span><App message={100} /></div>,
  document.getElementById('root'),
)
