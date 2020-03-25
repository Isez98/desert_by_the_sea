import React from 'react';
import logo from './logo.svg';
import './App.css';
import './designer.css';

//Components
import MenuItem from './Components/MenuItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">              
      <img class="logo"  src={require('./Resources/desert_by_the_sea_logo.png')}/> 
    <div class = "containerBar text mainText">
        <MenuItem></MenuItem>
        <a href="condos.php">
            <div class = "travelBar" >           
                CONDOS
            </div>
        </a>
        <div class = "travelBar">
            ABOUT US
        </div>
        <div class="travelBar">
            CONTACT
        </div>
    </div>
    <div class= "Main Body">
        <div>
            <img class="mainPicture"  src={require('./Resources/Penasco.jpg')}/> 
            <h3 class="greeting homeText">Welcome to Desert By The Sea's Website!</h3>
            <p class="paragraph homeText">
                Desert By The Sea Rentals is a condominium rental and managment company. We offer quality condos at accessible prices. 
                Our installations at Princesa De Peñasco have pool and beach access, along with a nearby restaurant/bar. We offer both single and
                double bedrooms along with bathrooms.
            </p>
        </div>
    </div>
      </header>
    </div>
  );
}

export default App;
