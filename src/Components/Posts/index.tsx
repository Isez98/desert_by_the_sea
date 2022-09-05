import React from 'react';
import Post from '../Post';

const galleryTitle = {
  marginBlockStart: 'none !important',
  display: 'block',
  fontSize: '2em',
  marginBlockEnd: '0.67em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  fontWeight: 'bold'
};

interface IPosts {
  posts: any;
}

const Posts: React.FC<IPosts> = ({ posts }) =>
  posts.map((element: any, index: number) => (
    <div key={index}>
      <span style={galleryTitle}>{element.title}</span>
      <h2>{posts[element] && posts[element].title}</h2>
      <Post imageSrc={['']}></Post>
    </div>
  ));

export default Posts;
