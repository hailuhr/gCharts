import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout.js';
import Chartspage from './components/charts/Chartspage.js';
import Homepage from './components/home/Homepage.js';


export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Homepage} />

    <Route path="charts" component={Chartspage} />
  </Route>
);
