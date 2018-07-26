import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

const App = () => (
  <div>
    <Switch>
      <Route key="root" exact path="/" push="true" component={Home} />
      <Route key="root" exact path="/about" push="true" component={About} />
      <Redirect to="/" />
    </Switch>
  </div>
);
export default App;
