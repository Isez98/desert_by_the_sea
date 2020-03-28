import React from 'react';
import './App.css';
import './designer.css';

//React-Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//Components
import MenuItem from './Components/MenuItem';
import MenuList from './Components/MenuList';

//Paginas
import Paginas from './Paginas'

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <img
                        className="logo"
                        src={require('./Resources/desert_by_the_sea_logo.png')}
                        alt="Logo of Desert By The Sea" />

                    <MenuList>
                        <MenuItem text='Home' path="/" ></MenuItem>
                        <MenuItem text='Condos' path="/condos"></MenuItem>
                        <MenuItem text='About' path="/about"></MenuItem>
                        <MenuItem text='Contact' path="/contact"></MenuItem>
                    </MenuList>
                </header>
                <Switch>
                    <Route path="/condos">
                        <Paginas.Condos />
                    </Route>
                    <Route path="/about">
                        <Paginas.About />
                    </Route>
                    <Route path="/contact">
                        <Paginas.Contact />
                    </Route>
                    <Route path="/">
                        <Paginas.Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;