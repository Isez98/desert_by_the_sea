import React from 'react';
import '../../App/App.css';
//import MenuItem from '../MenuItem';
import HeaderLogo from '../HeaderLogo';
//import TextContent from '../../App/textContent';

const Nav = () => {
  return (
    <nav className="nav">
      <HeaderLogo />
      {/* <ul className="nav-links">
          <MenuItem text={TextContent[pageLang].home} path={`/#lang=${pageLang}`} />
          <MenuItem text={TextContent[pageLang].condos} path={`/condos#lang=${pageLang}`} />
        </ul>*/}
    </nav>
  );
};

export default Nav;
