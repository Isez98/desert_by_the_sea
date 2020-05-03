import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

const HeaderLogo = (path) => {
  const history = useHistory();

  function handleClick() {
    history.push(path);
  }
  return (
    <img
      className="logo"
      onClick={handleClick}
      src={require('../../Resources/desert_by_the_sea_logo.png')}
      alt="Logo of Desert By The Sea"
    />
  );
};

HeaderLogo.propTypes = {
  path: propTypes.string
};

export default HeaderLogo;
