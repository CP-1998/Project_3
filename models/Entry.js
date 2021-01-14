const { model, Schema } = require('mongoose')

const Entry = new Schema({
  count: {
    type: String,
    required: true
  },
  campaign: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Entry', Entry)