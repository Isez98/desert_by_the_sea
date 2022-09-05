import React, { useContext } from 'react';
import '../../App/App.css';
import textContent from './textContent';
import propTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';

const About = () => {
  const { lang } = useContext(GlobalContext);
  return (
    <div className="Main Body">
      <h1 className="text greeting">{textContent[lang as 'en' | 'es'].title}</h1>
      <p className="text paragraph center">{textContent[lang as 'en' | 'es'].paragraph}</p>
    </div>
  );
};

About.propTypes = {
  hash: propTypes.string
};

export default About;
