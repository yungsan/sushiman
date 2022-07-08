const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');
console.log('router');
router.route('/').get(foodsController.index)

module.exports = router;