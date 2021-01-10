import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import { Container } from '@material-ui/core';
import './app.css';

function App() {
  return (
    <Container>
      <h4>
        Github <span>Jobs</span>
      </h4>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/:jobId'>
          <JobDetail />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
