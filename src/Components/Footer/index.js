import React from 'react';
import '../../App.css';
import textContent from './textContent';

const Footer = (props) => {
    let lang = props.hash
    return (
        <div className="footer-section">
            <div className="footer-phone">
                {textContent[lang].phone}
            </div>
            <div className='footer-company'>
                {textContent[lang].company}
            </div>
            <div>
                Check out our social media:
                <img className='facebook-logo' src='../../Resources/facebook.png' alt=''></img>
            </div>
        </div>
    )
}
export default Footer;