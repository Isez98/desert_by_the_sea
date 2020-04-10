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
            <section>
                <img className='condoLogos' src="../../Resources/Condo_Photos/pdp_logo.png" alt=""></img>
                <h2>{textContent[lang].developments}</h2>
            </section>
            <section className="section left-text">
                <h2 >{textContent[lang].headingWhy}</h2>
            </section>
        </div>  
    );
}

export default Home;