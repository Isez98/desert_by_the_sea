import React from 'react';
import './style.css';
import GalleryTemplate from '../../Components/ImageGallerys/Gallery';

 class Condos extends React.Component {
  render() {
    return (
      <div className="Main">
        <h1 className="text greeting">Condos </h1>
        <GalleryTemplate></GalleryTemplate>
      </div>
    );
  }
}

export default Condos;