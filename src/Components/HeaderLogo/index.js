import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import logo from '../../Resources/desert_by_the_sea_logo.png';

const HeaderLogo = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push(props.path);
  }
  return (
    <img
      className="logo"
      onClick={handleClick}
      src={logo}
      alt="Logo of Desert By The Sea"
    />
  );
};

HeaderLogo.propTypes = {
  props: propTypes.object,  
  path: propTypes.string
};

export default HeaderLogo;
