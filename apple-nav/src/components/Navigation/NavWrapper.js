import React from 'react';
import './Navigation.scss';

const NavWrapper = ({children}) => {
  return (
    <header className="navigation">
      {children}
    </header>
  );
};

export default NavWrapper;
