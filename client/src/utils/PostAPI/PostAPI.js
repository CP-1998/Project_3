import axios from 'axios'

const PostAPI = {
  getPosts: () => axios.get('/api/posts'),
  createPost: post => axios.post('/api/posts', post),
  updatePost: (id, updates) => axios.put(`/api/posts/${id}`, updates),
  deletePost: id => axios.delete(`/api/posts/${id}`)
}

export default PostAPI 