import React, { useContext } from 'react'
import '../../App/App.css'
import textContent from './textContent'
import FacebookLogo from '../FacebookLogo'
import './styles.css'
import GlobalContext from '../../Context/GlobalContext'

const Footer = () => {
  const { lang } = useContext(GlobalContext)
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-phone">
          {textContent[lang ? (lang as 'en' | 'es') : 'en'].phone}
        </div>
        <div className="footer-social">
          {textContent[lang ? (lang as 'en' | 'es') : 'en'].social}
          <FacebookLogo></FacebookLogo>
        </div>
        <div className="footer-company">
          {textContent[lang ? (lang as 'en' | 'es') : 'en'].company}
        </div>
      </div>
    </div>
  )
}

export default Footer
