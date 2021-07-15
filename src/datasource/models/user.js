const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  attempts: {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model('User', userSchema)
