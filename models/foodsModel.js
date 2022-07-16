const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema({
  name: {
    type: String, 
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  salePrice: {
    type: Number,
    trim: true,
  },
  category: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: 'https://static.wikia.nocookie.net/wawaforthewin/images/4/40/Screenshot_2022-06-04_4.03.17_PM.png/'
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('foods', foodsSchema);