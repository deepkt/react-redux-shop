import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/';
import { About } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
