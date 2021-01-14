const { model, Schema } = require('mongoose')

const User = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  campaigns: [{
    type: Schema.Types.ObjectId,
    ref: 'campaigns'
  }],
entries: [{
  type: Schema.Types.ObjectId,
  ref: 'entries'
}]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)