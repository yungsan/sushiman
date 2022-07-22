const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const foodsController = require("../controllers/foodsController");
const cartsController = require("../controllers/cartsController");

router
  .route("/addFood")
  .get(foodsController.addFood)
  .post(upload.single("thumbnail"), foodsController._addFood);

router
  .route("/:id")
  .get(foodsController.detail)
  .post(cartsController.addToCart);

router.route("/").get(foodsController.index);

module.exports = router;
