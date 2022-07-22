const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const usersController = require("../controllers/usersController");
const cartsController = require("../controllers/cartsController");

router.get('/orders', cartsController.order);
router.post('/logout', usersController.logout);

router
  .route("/")
  .get(usersController.index)
  .put(upload.single('avatar'), usersController.update);

module.exports = router;
