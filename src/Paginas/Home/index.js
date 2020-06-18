import React from 'react';
import '../../App/App.css';
import textContent from './textContent';
import propTypes from 'prop-types';

function Home(props) {
  //console.log(props);
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
            <img className="condoLogos" src={require('../../Resources/Condo_Photos/pdp_logo.png')} alt=""></img>
          </div>
          <h2 className="subTitle">{textContent[lang].developments}</h2>
        </div>
      </section>
      <section className="section">
        <div className="section-container">
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
          <div className="imageContainer">
            <img className="sectionImageRight" src={require('../../Resources/Condo_Photos/d-108/1.jpeg')} alt=""></img>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-container last-container">
          <div className="imageContainer">
            <img className="sectionImageLeft" src={require('../../Resources/Condo_Photos/d-108/3.jpeg')} alt=""></img>
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
    </div>
  );
}

Home.propTypes = {
  props: propTypes.object,
  hash: propTypes.string
};

export default Home;
