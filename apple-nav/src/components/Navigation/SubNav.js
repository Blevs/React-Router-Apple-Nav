import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const SubNav = ({items}) => {
  return (
    <nav className="subnav">
      {items.map(({icon, text, link}, idx) => (
        <NavLink key={idx}
                 className="subnav-item"
                 activeClassName="active"
        isActive={(_match, loc) => !!loc.pathname.match(RegExp(`${link}$`, 'i'))}
                 to={link}>
          <div className="subnav-icon">{icon}</div>
          <span className="subnav-text">{text}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default SubNav;
