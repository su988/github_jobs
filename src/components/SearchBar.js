import React, { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <input
        type='text'
        name='keyword'
        placeholder='Job title or company'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
