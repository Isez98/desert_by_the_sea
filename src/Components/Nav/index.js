import React from 'react';
import '../../App/App.css';
import MenuItem from '../MenuItem';
import HeaderLogo from '../HeaderLogo';
import TextContent from '../../App/textContent';
import propTypes from 'prop-types';

function Nav(props) {
  const pageLang = props.hash;
  return (
    <nav className="nav">
      <HeaderLogo path={`/#lang=${pageLang}`} />       
        {
       /* <ul className="nav-links">
          <MenuItem text={TextContent[pageLang].home} path={`/#lang=${pageLang}`} />
          <MenuItem text={TextContent[pageLang].condos} path={`/condos#lang=${pageLang}`} />
        </ul>*/
       }
    </nav>
  );
}

Nav.propTypes = {
  props: propTypes.object,
  hash: propTypes.string
};

export default Nav;
