import React from 'react';
import './style.css';

const galleryPhoto = {
  width: '18rem',
  height: '18rem',
  margin: '2rem',
  marginTop: '1rem',
}

export default function Post({imageSrc}) {
  return imageSrc.map((index, src) => <img key={index} style={galleryPhoto} src={src} alt={`imagen-${index}`}></img> )
}