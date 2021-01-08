import React, { useState, useContext } from 'react';
import { Context } from '../Context';

function SearchBar(props) {
  const [keyword, setKeyword] = useState('');
  const { handleSearch } = useContext(Context);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (props.location === 'sidebar') {
      handleSearch(e.target.value, true);
    }
  };

  const handleSubmit = () => {
    handleSearch(keyword);
  };

  return (
    <div>
      <input
        type='text'
        name='keyword'
        placeholder={
          props.location === 'header'
            ? 'Job title or company'
            : 'City or remote'
        }
        value={keyword}
        onChange={handleChange}
      />
      {props.location === 'header' ? (
        <button onClick={handleSubmit}>Search</button>
      ) : null}
    </div>
  );
}

export default SearchBar;
