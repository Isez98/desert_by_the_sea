import React from 'react';

const FacebookLogo = () => {
  function handleClick() {
    window.open('https://www.facebook.com/DesertbytheSea/');
  }

  return (
    <img className="facebook-logo" src={require('../../Resources/facebook.png')} alt="" onClick={handleClick}></img>
  );
};

export default FacebookLogo;
