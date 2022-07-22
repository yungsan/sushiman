const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
  foodId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  foodThumbnail: {
    type: String,
  },
  foodName: {
    type: String
  },
  foodPrice: {
    type: Number
  },
  amount: {
    type: Number,
    requied: true
  },
  status: {
    type: Number,
    /**
     * 1: draft
     * 2: ordered
     * 3: completed
     * 4: cancelled
     */
    default: 1,
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('carts', cartsSchema);