import React, { useState } from 'react';
//import Gallery from 'react-grid-gallery';
import '../../../Paginas/Condos/style.css';
import Posts from '../../Posts';

const GalleryTemplate = () => {
  const [posts, _] = useState<any>();

  return (
    <React.Fragment>
      <Posts posts={posts}></Posts>
    </React.Fragment>
  );
};

export default GalleryTemplate;
