import React from 'react';

function Home() {
    return (
        <div class="Main Body">
            <div>
                <img
                    class="mainPicture"
                    src={require('../../Resources/Penasco.jpg')}
                    alt="Home Page Capture Of Rocky Point" />
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

export default Home;