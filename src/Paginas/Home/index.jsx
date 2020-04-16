import React from 'react';
import '../../App.css';
import textContent from './textContent';

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
                        <img className='condoLogos' src={require("../../Resources/Condo_Photos/pdp_logo.png")} alt=""></img>
                    </div> 
                   <subTitle>{textContent[lang].developments}</subTitle>
                </div>
            </section>
            <section className="section">
                <div className="section-container">
                    <div className='left-text'>
                        <h2 >{textContent[lang].headingWhy}</h2>
                        <p className="section-paragraph">{textContent[lang].paragraphWhy}</p>
                    </div>
                    <div className="imageContainer">
                        <img className='sectionImageRight' src={require("../../Resources/Condo_Photos/d-108/1.jpeg")} alt=""></img>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="section-container">
                    <div>
                        <img className='sectionImageLeft' src={require("../../Resources/Condo_Photos/d-108/3.jpeg")} alt=""></img>
                    </div>
                    <div className='right-text'>
                        <h2 >{textContent[lang].headingMan}</h2>
                        <p className="section-paragraph">{textContent[lang].paragraphMan}</p>
                    </div>                    
                </div>
            </section>
        </div>  
    );
}

export default Home;