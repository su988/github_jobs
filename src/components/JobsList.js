import React, { useContext } from 'react';
import JobCard from './JobCard';
import { Context } from '../Context';

function JobsList() {
  const { filteredJobs, handleSearch, isLoaded } = useContext(Context);

  const jobsList = filteredJobs.map((job) => (
    <JobCard
      key={job.id}
      id={job.id}
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
      {!isLoaded && <div>Loading...</div>}
      {filteredJobs.length === 0 ? (
        <div>
          <h6>No Matching Result</h6>
          <button onClick={() => handleSearch('')}>Go back</button>
        </div>
      ) : (
        jobsList
      )}
    </main>
  );
}

export default JobsList;
