import React from 'react'
import Post from '../Post';

const galleryTitle = {
  marginBlockStart: 'none !important',
  display: 'block',
  fontSize: '2em',
  marginBlockEnd: '0.67em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  fontWeight: 'bold'
}

export default function Posts({ posts }) {
  return posts.map((element, index) => (
    <div key={index}>
      <span style={galleryTitle}>{element.title}</span>
      <h2 >{posts[element] && posts[element].title}</h2>
      <Post imageSrc={element.srcList}></Post>
    </div>
  )
  )
}