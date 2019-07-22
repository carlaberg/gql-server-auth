const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'user'
  }
}, {timestamps: true})

module.exports = mongoose.model('post', userSchema)