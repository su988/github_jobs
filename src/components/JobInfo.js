import React, { useContext } from 'react';
import { Context } from '../Context';

function JobInfo() {
  const { name } = useContext(Context);

  return (
    <div>
      <h4>jobs info</h4>
      {name}
    </div>
  );
}

export default JobInfo;
