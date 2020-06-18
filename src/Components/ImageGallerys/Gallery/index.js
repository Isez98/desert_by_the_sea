import React from 'react';
import { getPosts } from '../../../ghost-client.js';
//import Gallery from 'react-grid-gallery';
import '../../../Paginas/Condos/style.css';
import Posts from '../../Posts';

class GalleryTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts });
  }

  render() {   
    const { posts } = this.state; 
    return (
      <div>
        <Posts posts={posts}></Posts>
      </div>
    );
  }
}

export default GalleryTemplate;