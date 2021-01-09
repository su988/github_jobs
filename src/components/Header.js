import React from 'react';
import SearchBar from './SearchBar';
import './header.css';

function Header() {
  return (
    <div
      className='header'
      style={{
        backgroundImage: `url('/images/backgroundImg.png')`
      }}
    >
      <SearchBar location={'header'} />
    </div>
  );
}

export default Header;
