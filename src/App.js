import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';

function App() {
  return (
    <div>
      <Link to='/'>Github Jobs</Link>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/:jobId'>
          <JobInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
