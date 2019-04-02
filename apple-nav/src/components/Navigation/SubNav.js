import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const SubNav = ({items, display}) => {
  let icons = null;
  const getScroll = (elem) => ({left: elem.scrollLeft,
                                right: (elem.scrollLeftMax || elem.scrollWidth - elem.clientWidth)});
  const [scroll, setScroll] = useState({left: null, right: null});
  useEffect(() => {
    setScroll(getScroll(icons));
  }, [icons]);
  useEffect(() => {
    const handleResize = () => icons && setScroll(getScroll(icons));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <nav className={["subnav", display].filter(x=>x).join(" ")}>
      <div className="subnav-items"
           ref={node => icons = node}
           onScroll={e => setScroll(getScroll(icons))}>
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
      <div className={"paddle-left" + (scroll.left && scroll.left !== 0 ? " visible" : "")}
           onClick={() => icons.scrollBy({left: -icons.firstChild.clientWidth, behavior: 'smooth'})}>
        &lsaquo;
      </div>
      <div className={"paddle-right" + (scroll.right !== scroll.left ? " visible" : "")}
           onClick={() => icons.scrollBy({left: icons.firstChild.clientWidth, behavior: 'smooth'})}>
        &rsaquo;
      </div>
    </nav>
  );
};

export default SubNav;
