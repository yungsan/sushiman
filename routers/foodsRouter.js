const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');

router.route('/').get(foodsController.index)

module.exports = router;