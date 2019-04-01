import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const SubNav = ({items, display}) => {
  return (
    <nav className={["subnav", display].join(" ")}>
      <div className="subnav-items">
        {items.map(({icon: Icon, text, link}, idx) => (
          <NavLink key={idx}
                   className="subnav-item"
                   activeClassName="active"
                   isActive={(_match, loc) => !!loc.pathname.match(RegExp(`${link}$`, 'i'))}
                   to={link}>
            <Icon className="subnav-icon" />
            <span className="subnav-text">{text}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default SubNav;
