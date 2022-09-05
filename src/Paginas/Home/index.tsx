import React from 'react'
import '../../App/App.css'
import textContent from './textContent'
import image1 from '../../Resources/Condo_Photos/pic-right.jpeg'
import image2 from '../../Resources/Condo_Photos/pic-left.jpeg'
import princesaLogo from '../../Resources/Condo_Photos/pdp_logo.png'
import SlideShow from '../../Components/SlideShow'
// import house_1 from '../../Resources/dbtsr_pics/1.jpeg';
// import house_2 from '../../Resources/dbtsr_pics/2.jpeg';
// import house_3 from '../../Resources/dbtsr_pics/3.jpeg';
// import house_4 from '../../Resources/dbtsr_pics/4.jpeg';
// import house_5 from '../../Resources/dbtsr_pics/5.jpeg';
// import house_6 from '../../Resources/dbtsr_pics/6.jpeg';
import condo_1 from '../../Resources/3Bd-2Bt/1.jpeg'
import condo_2 from '../../Resources/3Bd-2Bt/2.jpeg'
import condo_3 from '../../Resources/3Bd-2Bt/3.jpeg'
import condo_4 from '../../Resources/3Bd-2Bt/4.jpeg'
import condo_5 from '../../Resources/3Bd-2Bt/5.jpeg'
import condo_6 from '../../Resources/3Bd-2Bt/6.jpeg'
// import GlobalContext from '../../Context/GlobalContext';
import { IPagesProps } from '../../types'
import Hero from '../../Components/Hero'

const Home: React.FC<IPagesProps> = ({ lang }) => {
  return (
    <div>
      <Hero />
      <section className="development-section">
        <div>
          <div className="devLogoContainer">
            <img className="condoLogos" src={princesaLogo} alt=""></img>
          </div>
          <h2 className="subTitle">
            {textContent[lang as 'en' | 'es'].developments}
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="section-container first-container">
          <div className="left-text">
            <h2>{textContent[lang as 'en' | 'es'].headingMan}</h2>
            <p className="section-two-list justify">
              {textContent[lang as 'en' | 'es'].paragraphMan}
            </p>
            <div className="princesa-list">
              <ul className="first-list">
                <li>
                  {textContent[lang as 'en' | 'es'].listPrincesa.security}
                </li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.parking}</li>
                <li>
                  {textContent[lang as 'en' | 'es'].listPrincesa.restaurant}
                </li>
                <li>
                  {textContent[lang as 'en' | 'es'].listPrincesa.adultPool}
                </li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.pools}</li>
                <li>
                  {textContent[lang as 'en' | 'es'].listPrincesa.kiddiePools}
                </li>
              </ul>
              <ul className="second-list">
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.jacuzzi}</li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.gym}</li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.grill}</li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.store}</li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.court}</li>
                <li>{textContent[lang as 'en' | 'es'].listPrincesa.palapas}</li>
              </ul>
            </div>
          </div>
          <div className="imageContainer__end">
            <img className="sectionImageRight" src={image1} alt=""></img>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-container last-container">
          <div className="imageContainer">
            <img className="sectionImageLeft" src={image2} alt=""></img>
          </div>
          <div className="right-text">
            <h2>{textContent[lang as 'en' | 'es'].headingWhy}</h2>
            <ul className="section-two-list list-align">
              <li>{textContent[lang as 'en' | 'es'].listWhy.deal}</li>
              <li>{textContent[lang as 'en' | 'es'].listWhy.rates}</li>
              <li>{textContent[lang as 'en' | 'es'].listWhy.honesty}</li>
              <li>{textContent[lang as 'en' | 'es'].listWhy.location}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{ flexDirection: 'column' }}>
        <h2>{textContent[lang as 'en' | 'es'].gallery}</h2>
        <SlideShow>
          <img className="smallImage" src={condo_1} alt="" />
          <img className="smallImage" src={condo_2} alt="" />
          <img className="smallImage" src={condo_5} alt="" />
          <img className="smallImage" src={condo_3} alt="" />
          <img className="smallImage" src={condo_4} alt="" />
          <img className="smallImage" src={condo_6} alt="" />
        </SlideShow>
      </section>
      {/*<section className="development-section section" style={{ margin: '0' }}>
        <div>
          <h2 className="subTitle">{textContent[lang].housesText}</h2>
        </div>
      </section>
       <section className="section">
        <SlideShow>
          <img className="smallImage" src={house_1} alt="" />
          <img className="smallImage" src={house_2} alt="" />
          <img className="smallImage" src={house_3} alt="" />
          <img className="smallImage" src={house_4} alt="" />
          <img className="smallImage" src={house_5} alt="" />
          <img className="smallImage" src={house_6} alt="" />
        </SlideShow>
      </section> */}
    </div>
  )
}

export default Home
