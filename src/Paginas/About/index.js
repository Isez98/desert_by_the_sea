import React from 'react';
import '../../App/App.css';
import textContent from './textContent';
import propTypes from 'prop-types';

function About(hash) {
  let lang = hash;
  return (
    <div className="Main Body">
      <h1 className="text greeting">{textContent[lang].title}</h1>
      <p className="text paragraph center">{textContent[lang].paragraph}</p>
    </div>
  );
}

About.propTypes = {
  hash: propTypes.string
};

export default About;
