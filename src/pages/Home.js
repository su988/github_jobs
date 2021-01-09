import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import JobsList from '../components/JobsList';
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div>
      <Header />
      <Grid container justify='space-between'>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <JobsList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
