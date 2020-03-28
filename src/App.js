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
            <MenuItem text='Home'></MenuItem>
            <MenuItem text='Condos'></MenuItem>
            <MenuItem text='About'></MenuItem>
            <MenuItem text='Contact'></MenuItem>
          </MenuList>
        </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/condos">
            <Condos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div class="Main Body">
      <div>
        <img 
            class="mainPicture" 
            src={require('./Resources/Penasco.jpg')} 
            alt="Home Page Capture Of Rocky Point"/>
        <h3 class="greeting homeText">Welcome to Desert By The Sea's Website!</h3>
        <p class="paragraph homeText">
          Desert By The Sea Rentals is a condominium rental and managment company. We offer quality condos at accessible prices.
          Our installations at Princesa De Peñasco have pool and beach access, along with a nearby restaurant/bar. We offer both single and
          double bedrooms along with bathrooms.
            </p>
      </div>
    </div>
  );
}

function Condos() {
  return (
    <div class="Main Body">
      <h1>Condos</h1>
      <h3>Dos Habitaciones, Dos Baños</h3>
    </div>
  );
}

export default App;
