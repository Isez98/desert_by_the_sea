import React, { useContext } from 'react'
import GlobalContext from '../../Context/GlobalContext'
import textContent from '../../Paginas/Home/textContent'

const Hero: React.FC = () => {
  const { lang } = useContext(GlobalContext)
  return (
    <React.Fragment>
      <div className="hero flex-center">
        <div className="hero-message">
          <h1 className="hero-title">
            {textContent[lang ? (lang as 'en' | 'es') : 'en'].title}
          </h1>
          <h2 className="hero-sub-title">
            {textContent[lang ? (lang as 'en' | 'es') : 'en'].subTitle}
          </h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero
