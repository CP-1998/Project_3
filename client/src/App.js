import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostAPI from './utils/PostAPI'
import PostContext from './utils/PostContext'
import Navbar from './components/Navbar'
import Card from './components/Card'
import User from './pages/User'


const {
  getPosts,
  createPost,
  deletePost
} = PostAPI

const App = () => {
  const [postState, setPostState] = useState({
    post: '',
    posts: []
  })

  postState.handleInputChange = event => {
    setPostState({ ...postState, [event.target.name]: event.target.value })
  }

  postState.handleAddPost = event => {
    event.preventDefault()
    let posts = JSON.parse(JSON.stringify(postState.posts))
    createPost({
      text: postState.post,
      isDone: false
    })
      .then(({ data: post }) => {
        posts.push(post)
        setPostState({ ...postState, posts, post: '' })
      })
      .catch(err => console.error(err))
  }

  postState.handleDeletePost = id => {
    let posts = JSON.parse(JSON.stringify(postState.posts))
    deletePost(id)
      .then(() => {
        posts = posts.filter(post => post._id !== id)
        setPostState({ ...postState, posts })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPosts()
      .then(({ data: posts }) => {
        setPostState({ ...postState, posts })
      })
  }, [])

  return (
    <>
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/User" component={User}/>
          </Switch>
      </div>
    </Router>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )



}

export default App;

