import React, { useContext, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../Context';
import './jobDetail.css';
import {
  FaLongArrowAltLeft,
  FaGlobeAmericas,
  FaRegClock
} from 'react-icons/fa';
import ReactTimeAgo from 'react-time-ago';

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
        <div className='jobDetail'>
          <div className='side'>
            <Link to='/'>
              <p id='back-arrow'>
                <FaLongArrowAltLeft />
                Back to search
              </p>
            </Link>
            <p id='apply'>HOW TO APPLY</p>
            <div
              dangerouslySetInnerHTML={{ __html: selectedJob.how_to_apply }}
              id='apply-how'
            ></div>
          </div>
          <div className='main'>
            <div className='main-flex'>
              <p id='title'>{selectedJob.title}</p>
              <p id='type'>{selectedJob.type}</p>
            </div>
            <p id='date'>
              <FaRegClock />
              <ReactTimeAgo date={selectedJob.created_at} locale='en-US' />
            </p>

            <div className='logo-flex'>
              <div>
                <img
                  src={selectedJob.company_logo}
                  alt=''
                  width='50'
                  height='50'
                  id='logo'
                />
              </div>
              <div>
                <p id='company'>{selectedJob.company}</p>
                <p id='location'>
                  <FaGlobeAmericas />
                  {selectedJob.location}
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              id='description'
            ></div>
          </div>
        </div>
      ) : (
        <div onClick={getJobDetail(jobId)} className='loading'>
          Loading...
        </div>
      )}
    </Fragment>
  );
}

export default JobInfo;
