import React from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';

class D108 extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }
    componentWillMount() {
       fetchImages().then(images => {
        this.setState({images})
       })
         
        // =  await fetchImages();
    }
    render () {   
        return(
                <Gallery images= {this.state.images}/>
        );
    }
}
//Estudiar  promises and callbacks
async function fetchImages () {
    
    return axios
    .get('https://pixabay.com/api/?key=15834751-342e9baf90a57d34e236a6890&image_type=photo&q=beach+front&per_page=12')
    .then(response => {
        console.log(response);
      return response.data.hits.map((product, i) => ({
        id: product.id,
        src: product.largeImageURL,
        thumbnail: product.previewURL,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "2 room condominium."
      }))
    })
    .then(condominums => {
        console.log({condominums});
        return condominums
    })
    .catch(error => {
      if (error) throw new Error(error)
    })
}

export default D108;