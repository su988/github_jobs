import React, { useContext, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../Context';

function JobInfo() {
  const { jobId } = useParams();
  const { getJobDetail, selectedJob } = useContext(Context);

  useEffect(() => {
    getJobDetail(jobId);
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      {selectedJob ? (
        <div>
          <div className='side'>
            <Link to='/'>
              <p>back to search</p>
            </Link>
            <p>HOW TO APPLY</p>
            <div
              dangerouslySetInnerHTML={{ __html: selectedJob.how_to_apply }}
            ></div>
          </div>
          <div className='main'>
            <h2>{selectedJob.company}</h2>
            <p>{selectedJob.created_at}</p>
            <img src={selectedJob.company_logo} alt='' width='50' height='50' />
            <p>{selectedJob.location}</p>
            <div
              dangerouslySetInnerHTML={{ __html: selectedJob.description }}
            ></div>
          </div>
        </div>
      ) : (
        <div onClick={getJobDetail(jobId)}>Loading...</div>
      )}
    </Fragment>
  );
}

export default JobInfo;
