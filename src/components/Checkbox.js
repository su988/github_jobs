import React, { useContext } from 'react';
import { Context } from '../Context';

function Checkbox(props) {
  const { checkboxFilter } = useContext(Context);

  const handleCheckbox = (e) => {
    // console.log(e.target.checked);
    // console.log(e.target.dataset.id);
    checkboxFilter(e.target.checked, e.target.dataset.id);
  };

  return (
    <div>
      <label>
        <input
          type={props.id === 'Full Time' ? 'checkbox' : 'radio'}
          data-id={props.id}
          onClick={handleCheckbox}
        />
        {props.id}
      </label>
    </div>
  );
}

export default Checkbox;
