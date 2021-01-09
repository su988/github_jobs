import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';

function App() {
  return (
    <div>
      <h4>Github Jobs</h4>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/:jobId'>
          <JobDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
