import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import JobsList from '../components/JobsList';

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
