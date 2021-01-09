import React from 'react';
import SearchBar from './SearchBar';
import SelectBox from './SelectBox';

function Sidebar() {
  return (
    <div className='sideBar'>
      <SelectBox id={'Full Time'} />
      <SearchBar location={'sidebar'} />
      <SelectBox />
    </div>
  );
}

export default Sidebar;
