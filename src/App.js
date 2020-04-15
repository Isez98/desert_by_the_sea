import React from 'react';
import './App.css';

//React-Router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//Components
import MenuItem from './Components/MenuItem';
import MenuList from './Components/MenuList';
import HeaderLogo from './Components/HeaderLogo';

//Paginas
import Paginas from './Paginas'

//Idiomas
import textContent from './textContent';

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
        return navigator.language;
    }
    return detectLang('lang', '');        
};
window.location.hash = `lang=${lang()}`;
function App() {    
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <div className='containerBar'>
                        <HeaderLogo path={`/${window.location.hash}`}></HeaderLogo>
                        <div className='menuList'>
                            <MenuList> 
                                <MenuItem text={textContent[lang()].home} path={`/`} ></MenuItem>
                                <MenuItem text={textContent[lang()].condos} path={`/condos`}></MenuItem>
                                <MenuItem text={textContent[lang()].about} path={`/about`}></MenuItem>
                                <MenuItem text={textContent[lang()].contact} path={`/contact`}></MenuItem>
                            </MenuList>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path="/condos">
                        <Paginas.Condos />
                    </Route>
                    <Route path="/about">
                        <Paginas.About hash={lang()}/>
                    </Route>
                    <Route path="/contact">
                        <Paginas.Contact />
                    </Route>
                    <Route path={`/`}>
                        <Paginas.Home hash={lang()} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;