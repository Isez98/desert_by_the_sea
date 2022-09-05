import React from 'react';
import './style.css';

const galleryPhoto = {
  width: '18rem',
  height: '18rem',
  margin: '2rem',
  marginTop: '1rem'
};

interface IPost {
  imageSrc: any;
}

const Post: React.FC<IPost> = ({ imageSrc }) =>
  imageSrc.map((src: string, index: number) => {
    return <img key={index} style={galleryPhoto} src={src} alt={`imagen-${index}`} />;
  });

export default Post;
