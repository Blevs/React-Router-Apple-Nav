import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const TopNav = ({links}) => {
  return (
    <nav>
    {links.map((l, idx) => (
      <NavLink key={idx} activeStyle={{color: 'grey'}} to={`/${l.toLowerCase()}`}>
      {l}
      </NavLink>
    ))}
    </nav>
  );
};

export default TopNav;
