import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Employees from './pages/Employees';
import Markers from './pages/Markers';
import Find from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/employees" exact component={Employees} />
        <Route path="/markers" exact component={Markers} />
        <Route path="/search" exact component={Find} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;