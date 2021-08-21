import React from 'react';
import '../../App/App.css';
import textContent from './textContent';
import FacebookLogo from '../FacebookLogo';
import propTypes from 'prop-types';
import './styles.css';

const Footer = (props) => {
  const pageLang = props.hash;
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-phone">{textContent[pageLang].phone}</div>
        <div className="footer-social">
          {textContent[pageLang].social}
          <FacebookLogo></FacebookLogo>
        </div>
        <div className="footer-company">{textContent[pageLang].company}</div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  props: propTypes.object,
  hash: propTypes.string
};

export default Footer;
