import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';

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
    <div>
      {props.id === 'Full Time' ? (
        <label>
          <input
            type={'checkbox'}
            data-id={props.id}
            onClick={handleCheckbox}
          />
          {props.id}
        </label>
      ) : (
        <div>
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
    </div>
  );
}

export default SelectBox;
