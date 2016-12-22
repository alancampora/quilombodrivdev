import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import MainView from './view/MainView';


const prefix = process.env.ROUTE_PREFIX || '/'; 

export default (
  <Route path={prefix} component={App}>
    <IndexRoute component={MainView}/>
  </Route>
);
