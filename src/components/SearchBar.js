import React, { useState, useContext } from 'react';
import { Context } from '../Context';

function SearchBar() {
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
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
