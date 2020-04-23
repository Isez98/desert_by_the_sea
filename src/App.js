import React from 'react';
import './App.css';

//React-Router
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";

//Components
// import MenuItem from './Components/MenuItem';
// import MenuList from './Components/MenuList';
 import HeaderLogo from './Components/HeaderLogo';
 import Footer from './Components/Footer';

//Paginas
import Paginas from './Paginas'

//Idiomas
//import textContent from './textContent';
const navLang = navigator.language.substr(0,2);
console.log(navLang);

let detectLang = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\#');
    var regex = new RegExp('[#]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

let lang = function() {
    if(detectLang('lang', '') == null) {   
        return navLang;
    }
    return detectLang('lang', '');        
};

let pageLang = lang();
window.location.hash = `lang=${pageLang}`;

function App() {    
    return (
        <div className="App">
                <div className="App-header">
                    <div className='containerBar'>
                        <HeaderLogo path={`/${window.location.hash}`}></HeaderLogo>
                    </div>                    
                    {
                        // <div className='announcement'>{textContent[pageLang].announcement}</div>
                    }
                </div>
                <Paginas.Home hash={pageLang}></Paginas.Home>
                <Footer hash={pageLang}></Footer>
        </div>
    );
}

export default App;