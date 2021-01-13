const router = require('express').Router()
const { Post } = require('../models')

router.get('/posts', (req, res) => {
  Item.find()
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post('/posts', (req, res) => {
  Item.create(req.body)
    .then(post => res.json(post))
    .catch(err => console.log(err))
})

router.put('/posts/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/posts/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router