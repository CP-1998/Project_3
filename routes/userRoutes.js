const router = require('express').Router()
const { User } = require('../models')
// const passport = require('passport')
// const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  const { firstName, lastName, username, email, password } = req.body
  User.register(new User({ firstName, lastName, username, password, email }), password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

router.get('/users', (req, res) => {
  res.json(req.user)
})

module.exports = router