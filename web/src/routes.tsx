import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Employees from './pages/Employees';
import Markers from './pages/Markers';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/employees" exact component={Employees} />
        <Route path="/markers" exact component={Markers} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;