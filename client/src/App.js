import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import nav from './components/nav'
// import Card from './components/card'
// import signin from './pages/signin/'
// import signup from './pages/signup'
import Navbar from './component/navbar'
import Login from './pages/signin'
import SignUp from './pages/signup'
// import Home from '@material-ui/core/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/signin'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
