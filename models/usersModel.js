const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String, 
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://static.wikia.nocookie.net/wawaforthewin/images/4/40/Screenshot_2022-06-04_4.03.17_PM.png/'
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('users', usersSchema);