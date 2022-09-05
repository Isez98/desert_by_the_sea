import React, { useState } from 'react';
import propTypes from 'prop-types';
import './styles.css';

const SlideShow = (props: { children: any[] }) => {
  let [imageID, setImageID] = useState(0);
  let [showModal, setShowModal] = useState(false);
  function plusDivs(num: number) {
    if (imageID + num < 0) {
      return null;
    }
    if (imageID + num > props.children.length - 1) {
      return null;
    }
    setImageID((imageID += num));
  }

  return (
    <div
      style={{ height: '100%', marginBottom: '5VH' }}
      className="w3-content w3-display-container container__slideshow"
    >
      {props.children.map((element: any, index: number) => (
        <div
          key={index}
          style={index === imageID ? { display: 'block' } : { display: 'none' }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          {element}
        </div>
      ))}
      <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>
        &#10094;
      </button>
      <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>
        &#10095;
      </button>
      <div id="myModal" className="modal" style={showModal ? { display: 'block' } : { display: 'none' }}>
        <span
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </span>
        <img className="modal-content" id="img01" src={props.children[imageID].props.src} alt="" />
      </div>
    </div>
  );
};

SlideShow.propTypes = {
  props: propTypes.object,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired
};

export default SlideShow;
