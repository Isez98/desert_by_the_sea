import React from 'react';
import '../../App.css';
import SimpleImageSlider from "react-simple-image-slider";

class Slideshow extends React.Component {
    render() {
        const images = [
            { url: require('../../Resources/Condo_Photos/d-108/1.jpeg') },
            { url: require('../../Resources/Condo_Photos/d-108/11.jpeg') },
            { url: require('../../Resources/Condo_Photos/d-108/7.jpeg') }
        ];

        const onStartSlide = (idx, length) => {
            console.log(`[App onStartSlide] ${idx}/${length}`);
            this.setState({ slideIndexText: `${idx} / ${length}`});
        }

        return (
            <div className='slide-container'>
                <SimpleImageSlider
                    slideDuration={1} 
                    width={1200}
                    height={504}
                    images={images} 
                    onStartSlide={(1,images.length)}                
                />
            </div>
        );
    }
}
export default Slideshow;