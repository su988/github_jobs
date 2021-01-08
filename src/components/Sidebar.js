import React from 'react';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';

function Sidebar() {
  return (
    <div>
      <h4>sidebar</h4>
      <Checkbox id={'Full Time'} />
      <SearchBar location={'sidebar'} />
      <Checkbox id={'London'} />
      <Checkbox id={'Amsterdam'} />
      <Checkbox id={'New York'} />
      <Checkbox id={'Berlin'} />
    </div>
  );
}

export default Sidebar;
