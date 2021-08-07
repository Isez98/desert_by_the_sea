import React from 'react';
import '../../App/App.css';
import textContent from './textContent';
import propTypes from 'prop-types';
import image1 from '../../Resources/Condo_Photos/pic-right.jpeg';
import image2 from '../../Resources/Condo_Photos/pic-left.jpeg';
import princesaLogo from '../../Resources/Condo_Photos/pdp_logo.png';
import SlideShow from '../../Components/SlideShow';
import house_1 from '../../Resources/dbtsr_pics/1.jpeg';
import house_2 from '../../Resources/dbtsr_pics/2.jpeg';
import house_3 from '../../Resources/dbtsr_pics/3.jpeg';
import house_4 from '../../Resources/dbtsr_pics/4.jpeg';
import house_5 from '../../Resources/dbtsr_pics/5.jpeg';
import house_6 from '../../Resources/dbtsr_pics/6.jpeg';
import condo_1 from '../../Resources/3Bd-2Bt/1.jpeg';
import condo_2 from '../../Resources/3Bd-2Bt/2.jpeg';
import condo_3 from '../../Resources/3Bd-2Bt/3.jpeg';
import condo_4 from '../../Resources/3Bd-2Bt/4.jpeg';
import condo_5 from '../../Resources/3Bd-2Bt/5.jpeg';
import condo_6 from '../../Resources/3Bd-2Bt/6.jpeg';
function Home(props) {
  let lang = props.hash;
  return (
    <div>
      <div className="hero flex-center">
        <div className="hero-message">
          <h1 className="hero-title">{textContent[lang].title}</h1>
          <h2 className="hero-sub-title">{textContent[lang].subTitle}</h2>
        </div>
      </div>
      <section className="development-section">
        <div>
          <div className="devLogoContainer">
            <img className="condoLogos" src={princesaLogo} alt=""></img>
          </div>
          <h2 className="subTitle">{textContent[lang].developments}</h2>
        </div>
      </section>
      <section className="section">
        <div className="section-container first-container">
          <div className="left-text">
            <h2>{textContent[lang].headingMan}</h2>
            <p className="section-two-list justify">{textContent[lang].paragraphMan}</p>
            <div className="princesa-list">
              <ul className="first-list">
                <li>{textContent[lang].listPrincesa.security}</li>
                <li>{textContent[lang].listPrincesa.parking}</li>
                <li>{textContent[lang].listPrincesa.restaurant}</li>
                <li>{textContent[lang].listPrincesa.adultPool}</li>
                <li>{textContent[lang].listPrincesa.pools}</li>
                <li>{textContent[lang].listPrincesa.kiddiePools}</li>
              </ul>
              <ul className="second-list">
                <li>{textContent[lang].listPrincesa.jacuzzi}</li>
                <li>{textContent[lang].listPrincesa.gym}</li>
                <li>{textContent[lang].listPrincesa.grill}</li>
                <li>{textContent[lang].listPrincesa.store}</li>
                <li>{textContent[lang].listPrincesa.court}</li>
                <li>{textContent[lang].listPrincesa.palapas}</li>
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
            <h2>{textContent[lang].headingWhy}</h2>
            <ul className="section-two-list list-align">
              <li>{textContent[lang].listWhy.deal}</li>
              <li>{textContent[lang].listWhy.rates}</li>
              <li>{textContent[lang].listWhy.honesty}</li>
              <li>{textContent[lang].listWhy.location}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{ flexDirection: 'column' }}>
        <h2>Gallery</h2>
        <h3>Condo 3 Bedrooms, 2 Bathrooms</h3>
        <SlideShow>
          <img className="smallImage" src={condo_1} alt="" />
          <img className="smallImage" src={condo_2} alt="" />
          <img className="smallImage" src={condo_5} alt="" />
          <img className="smallImage" src={condo_3} alt="" />
          <img className="smallImage" src={condo_4} alt="" />
          <img className="smallImage" src={condo_6} alt="" />
        </SlideShow>
      </section>
      <section className="development-section section" style={{ margin: '0' }}>
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
      </section>
    </div>
  );
}

Home.propTypes = {
  props: propTypes.object,
  hash: propTypes.string
};

export default Home;
