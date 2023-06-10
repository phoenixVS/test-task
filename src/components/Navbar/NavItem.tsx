import React from 'react';

import './NavItem.css'

interface NavItemProps {
  name: string;
}

export const NavItem:React.FC<NavItemProps> = ({ name }) => {
  return(
    <li className='nav-item'><h2 className='uppercase font-bold text-4xl mr-8'>{name}</h2></li>
  );
}