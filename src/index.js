/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import Layout from './components/Layout.js';
import Homepage from './components/home/Homepage.js'
import Chartspage from './components/charts/Chartspage.js'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


const containerNode = document.querySelector("#main")

render(
  <Router history={browserHistory} routes={routes}>
  </Router>
  , containerNode);
