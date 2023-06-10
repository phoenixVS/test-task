import React from 'react';
import { NavItem } from './NavItem';

interface NavbarProps {
  
}

const content = [
  'First',
  'Second',
  'Some third text'
]
export const Navbar:React.FC<NavbarProps> = props => {
  return(
    <nav className="w-full">
      <ul className="w-full flex">
        {content.map(item => <NavItem key={item} name={item} />)}
      </ul>
    </nav>
  );
}