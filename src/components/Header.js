import React from 'react';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div>
      <h4>Header</h4>
      <SearchBar location={'header'} />
    </div>
  );
}

export default Header;
