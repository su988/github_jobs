import React from 'react';

function Checkbox(props) {
  const handleCheck = (e) => {
    // console.log(e.target.data);
  };

  return (
    <div>
      <label>
        <input type='checkbox' data-id={props.id} onClick={handleCheck} />
        {props.id}
      </label>
    </div>
  );
}

export default Checkbox;
