import React  from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory } from 'react-router'

import AppRoutes from './appRoutes'

const root = document.getElementById('app');

ReactDom.render(
  <Router history={browserHistory}>
    {AppRoutes}
  </Router>,
  root
);
