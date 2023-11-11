import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const data = require('./cards.json');


const getPost = (paramId) => {
  return data[paramId]
}
const getAllPosts = () => {
  return data.map((post) => {
    return post
  })
}

// const result = getAllPosts()
// console.log(result)

export default {
  getPost,
  getAllPosts
}