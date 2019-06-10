//dependencies 
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './components/Global/style/index.css'
import * as serviceWorker from './serviceWorker';

// Routes
import AppRoutes  from './routes'

render(
  <Router>
    <AppRoutes/>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
