import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Login from './pages/Login/Login'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App