import { createContext } from 'react'

const PostContext = createContext({
  post: '',
  posts: [],
})

export default PostContext