import React from 'react';
import '../../App/App.css';
import textContent from './textContent';

function About(props) {
    let lang = props.hash;
    return (        
        <div class="Main Body">
            <h1 className="text greeting">{textContent[lang].title}</h1>
            <p className="text paragraph center" >{textContent[lang].paragraph}</p>
        </div>
    );
}

export default About;