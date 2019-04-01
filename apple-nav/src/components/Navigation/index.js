import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const links = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Music",
    "Support",
  ];
  return (
    <header className="navigation">
      <nav>
        {links.map((l, idx) => (
          <NavLink key={idx} activeStyle={{color: 'grey'}} to={`/${l.toLowerCase()}`}>
            {l}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
