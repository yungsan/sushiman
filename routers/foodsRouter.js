const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const foodsController = require("../controllers/foodsController");

router
.route("/addFood")
.get(foodsController.addFood)
.get((req, res) => res.json('add foods'))
.post(upload.single('thumbnail'), foodsController._addFood);

router.get('/:id', foodsController.detail);

router.route("/").get(foodsController.index);

module.exports = router;
