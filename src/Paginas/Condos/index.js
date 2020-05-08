import React from 'react';
import ImageGallerys from '../../Components/ImageGallerys';
import './style.css';

function Condos() {
  return (
    <div className="Main">
      <h1 className="text greeting">Condos</h1>
      <h3 className="text paragraph center">Dos Habitaciones, Dos Baños</h3>
      <ImageGallerys></ImageGallerys>
    </div>
  );
}

export default Condos;
