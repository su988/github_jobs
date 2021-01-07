import React, { useState, useContext } from 'react';
import { Context } from '../Context';

function SearchBar(props) {
  const [keyword, setKeyword] = useState('');
  const { handleSearch } = useContext(Context);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    handleSearch(keyword);
  };

  return (
    <div>
      <input
        type='text'
        name='keyword'
        placeholder='Job title or company'
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
