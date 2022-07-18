const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const foodsController = require("../controllers/foodsController");

router.get('/:id', foodsController.detail);

router
  .route("/addFood")
  .get(foodsController.addFood)
  .post(upload.single('thumbnail'), foodsController._addFood);
router.route("/").get(foodsController.index);

module.exports = router;
