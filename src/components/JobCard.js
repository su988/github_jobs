import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ id, logo, company, title, type, location, date }) {
  return (
    <div key={id}>
      <Link to={`/${id}`}>
        <img src={logo} alt='' width='60' height='60' />
        <p>{company}</p>
        <p>{title}</p>
      </Link>
      <p>{type}</p>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
}

export default JobCard;
