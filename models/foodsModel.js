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
  description: {
    type: String,
    trim: true,
    default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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