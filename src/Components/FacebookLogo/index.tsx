import React from 'react';
import fbLogo from '../../Resources/facebook.png';

const FacebookLogo = () => {
  function handleClick() {
    window.open('https://www.facebook.com/DesertbytheSea/');
  }

  return (
    <img className="facebook-logo" src={fbLogo} alt="" onClick={handleClick}></img>
  );
};

export default FacebookLogo;
