const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
// const noFile = require('../middleware/noFile');
const usersController = require("../controllers/usersController");

router.post('/logout', usersController.logout);

router
  .route("/")
  .get(usersController.index)
  .put(upload.single('avatar'), usersController.update);

module.exports = router;
