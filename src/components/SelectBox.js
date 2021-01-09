import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Context } from '../Context';
import './selectBox.css';

function SelectBox(props) {
  const { filterFullTime, filterLocation } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState('');

  const handleCheckbox = (e) => {
    if (e.target.dataset.id === 'Full Time') {
      filterFullTime(e.target.checked, e.target.dataset.id);
    }
  };

  useEffect(() => {
    filterLocation(selectedValue);
  }, [selectedValue]);

  return (
    <Fragment>
      {props.id === 'Full Time' ? (
        <div className='checkbox'>
          <label>
            <input
              type={'checkbox'}
              data-id={props.id}
              onClick={handleCheckbox}
            />
            {props.id}
          </label>
        </div>
      ) : (
        <div className='radio'>
          <label>
            <input
              type='radio'
              checked={selectedValue === 'London'}
              value='London'
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            London
          </label>
          <label>
            <input
              type='radio'
              checked={selectedValue === 'Berlin'}
              value='Berlin'
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            Berlin
          </label>
          <label>
            <input
              type='radio'
              checked={selectedValue === 'Amsterdam'}
              value='Amsterdam'
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            Amsterdam
          </label>
          <label>
            <input
              type='radio'
              checked={selectedValue === 'New York'}
              value='New York'
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            New York
          </label>
        </div>
      )}
    </Fragment>
  );
}

export default SelectBox;
