const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/').get(usersController.index)

module.exports = router;