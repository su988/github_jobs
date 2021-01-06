import React, { useContext } from 'react';
import JobCard from './JobCard';
import { Context } from '../Context';

function JobsList() {
  const { jobs } = useContext(Context);

  const jobsList = jobs.map((job) => (
    <JobCard
      key={job.id}
      logo={job.company_logo}
      title={job.title}
      company={job.company}
      type={job.type}
      location={job.location}
      date={job.created_at}
    />
  ));

  return (
    <main>
      <h4>Job List</h4>
      {jobsList}
    </main>
  );
}

export default JobsList;
