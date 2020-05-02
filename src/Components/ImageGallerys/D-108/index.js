import React from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';
import '../../../App/App.css';

class D108 extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    fetchImages().then((images) => {
      this.setState({ images });
    });
  }
  render() {
    return (
      <div className="gallery">
        <Gallery images={this.state.images} />
      </div>
    );
  }
}
//Estudiar  promises and callbacks
function fetchImages() {
  return axios
    .get('https://pixabay.com/api/?key=15834751-342e9baf90a57d34e236a6890&image_type=photo&q=beach+front&per_page=12')
    .then((response) => {
      console.log(response);
      return response.data.hits.map((product) => ({
        id: product.id,
        src: product.largeImageURL,
        thumbnail: product.previewURL,
        thumbnailWidth: 370,
        thumbnailHeight: 244,
        caption: '2 room condominium.'
      }));
    })
    .then((condominums) => {
      console.log({ condominums });
      return condominums;
    })
    .catch((error) => {
      if (error) throw new Error(error);
    });
}

export default D108;
