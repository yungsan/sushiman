const cartsModel = require('../models/cartsModel');
const jwt = require("jsonwebtoken");

class cartsController{
  async order(req, res){
    const loginToken = req.signedCookies.loginToken;
    const userID = jwt.verify(loginToken, process.env.SECRET).id;

    const data = await cartsModel.find({ userId: userID });
    
    res.render('users/carts', { title: 'Carts', data });

  }

  async addToCart(req, res){
    try {

      await cartsModel.create(req.body);

    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new cartsController;