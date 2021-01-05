import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import JobsList from './JobsList';

function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <JobsList />
    </div>
  );
}

export default Home;
