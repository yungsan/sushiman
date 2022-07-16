const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");

router
  .route("/register")
  .get(usersController.register)
  .post(usersController._register);

router
  .route("/login")
  .get(usersController.login)
  .post(usersController._login);

router.get('/', (req, res, next) => {
  res.render('home/home', { title: 'Shushi Man', navBackground: 'sushired', logo: 'white' });
})

module.exports = router;