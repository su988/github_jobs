import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import './searchBar.css';

function SearchBar(props) {
  const [keyword, setKeyword] = useState('');
  const { handleSearch, filterLocation } = useContext(Context);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (props.location === 'sidebar') {
      filterLocation(e.target.value);
    }
  };

  const handleSubmit = () => {
    handleSearch(keyword);
  };

  return (
    <div
      className={
        props.location === 'header' ? 'headerSearchBar' : 'sideSearchBar'
      }
    >
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
