const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.HOST || process.env.LOCAL);
    console.log('Connected');
  } catch (error) {
    throw error;
  }
};
