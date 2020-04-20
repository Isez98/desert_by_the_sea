import React from 'react';
import '../../App.css';
import textContent from './textContent';
import FacebookLogo from '../FacebookLogo';
const Footer = (props) => {
    let lang = props.hash
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="footer-phone">
                    {textContent[lang].phone}
                </div>
                <div className='footer-social'>
                    {textContent[lang].social}
                    <FacebookLogo></FacebookLogo>
                </div>                           
            </div>
            <div className='footer-company'>
                {textContent[lang].company}
            </div> 
        </div>
    )
}
export default Footer;