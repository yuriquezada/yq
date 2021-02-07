import React from 'react';
import {useScrollSections} from 'react-scroll-section';

const Menu = () => {
    const sections = useScrollSections();
   
    return (
      <ul>
        {sections.map(({ id, onClick, selected }) => (
          <li key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </li>
        ))}
      </ul>
    );
  };

  export default Menu;