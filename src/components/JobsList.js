import React, { Fragment, useContext, useState } from 'react';
import JobCard from './JobCard';
import { Context } from '../Context';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import './jobsList.css';

function JobsList() {
  const { filteredJobs, handleSearch, isLoaded } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  // Get current 5 jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2)
      },
      float: 'right',
      marginBottom: '40px',
      '& .MuiPaginationItem-page.Mui-selected': {
        background: '#1E86FF',
        color: '#fff'
      }
    }
  }));

  function PaginationRounded() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Pagination
          count={Math.ceil(filteredJobs.length / 5)}
          variant='outlined'
          shape='rounded'
          page={currentPage}
          onChange={(event, val) => setCurrentPage(val)}
        />
      </div>
    );
  }

  const jobsList = currentJobs.map((job) => (
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
    <main className='jobsList'>
      {!isLoaded && <div id='loading'>Loading...</div>}
      {filteredJobs.length === 0 ? (
        <div className='no-result-btn'>
          <h6>No Matching Result</h6>
          <button onClick={() => handleSearch('')}>Go back</button>
        </div>
      ) : (
        <Fragment>
          {jobsList}
          <PaginationRounded />
        </Fragment>
      )}
    </main>
  );
}

export default JobsList;
