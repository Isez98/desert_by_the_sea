import React, { useState } from 'react';
import propTypes from 'prop-types';

const SlideShow = (props) => {
  let [imageID, setImageID] = useState(0);
  function plusDivs(num) {
    if (imageID + num < 0) {
      return null;
    }
    if (imageID + num > props.children.length - 1) {
      return null;
    }
    setImageID((imageID += num));
  }

  return (
    <div style={{ width: '48%', height: '100%', marginBottom: '5VH' }} className="w3-content w3-display-container">
      {props.children.map((element, index) => (
        <div key={index} style={index === imageID ? { display: 'block' } : { display: 'none' }}>
          {element}
        </div>
      ))}
      <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>
        &#10094;
      </button>
      <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>
        &#10095;
      </button>
    </div>
  );
};

SlideShow.propTypes = {
  props: propTypes.object,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired
};

export default SlideShow;
