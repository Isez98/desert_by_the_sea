import React from 'react';
import  ImageGallerys from '../../Components/ImageGallerys'
import '../../App/App.css';


function Condos() {
    return (
        <div class="Main">
            <h1 className="text greeting">Condos</h1>
            <h3 className="text paragraph center">Dos Habitaciones, Dos Baños</h3> 
            <ImageGallerys className="gallery"></ImageGallerys>
        </div>
    );
}

export default Condos;