
import GhostContentAPI from '@tryghost/content-api'
import $ from 'jquery';

const ghostApi = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '5d02e344945e142a3acf92946e',
  version: "v3"
});

export async function getPosts() {
  const posts = await ghostApi.posts.browse();
  const result = posts.map(post => {
    const { srcList, description } = getSrcImage(post.html);
    const result = {
      srcList,
      description,
      title: post.title
    };
    return result;
  })
  return result;
}

function getSrcImage(htmlStr) {
  let object = $('<div/>').html(htmlStr).contents();
  let description = object[0].textContent;
  const srcList = object.find("img").map((index, e) => e.src);
  return { description, srcList }
}