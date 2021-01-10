import React from 'react';
import { Link } from 'react-router-dom';
import './jobCard.css';
import { FaGlobeAmericas, FaRegClock } from 'react-icons/fa';
import ReactTimeAgo from 'react-time-ago';

function JobCard({ id, logo, company, title, type, location, date }) {
  return (
    <Link to={`/${id}`} className='removeUnderline'>
      <div key={id} className='jobCard'>
        <div className='card-left'>
          <img src={logo} alt='' width='90' height='90' />
        </div>
        <div className='card-right'>
          <p>{company}</p>
          <p>{title}</p>
          <p>{type}</p>
          <div className='card-footer'>
            <p>
              <FaGlobeAmericas />
              {location}
            </p>
            <p>
              <FaRegClock />
              <ReactTimeAgo date={date} locale='en-US' />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
