import React from 'react';
import {useScrollSections} from 'react-scroll-section';
import MenuItem from './MenuItem';

const Menu = () => {
    const sections = useScrollSections();
    
    return (
      <ul>
        {sections.map(({ id, onClick, selected}) => (
          <MenuItem key = {id} name={id} onClick={onClick} selected={selected}/>
        ))}
      </ul>
    );
  };

  export default Menu;