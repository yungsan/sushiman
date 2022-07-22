const foodsModel = require('../models/foodsModel');
const jwt = require("jsonwebtoken");

class foodsController{
  async index(req, res){
    const foods = await foodsModel.find({}).sort({ _id: -1 });
    res.render('foods/foods', { title: 'Foods', foods });
  }

  addFood(req, res){
    res.render('foods/addFood', { title: 'Add Food' });
  }
  
  async _addFood(req, res){
    try {
      req.body.thumbnail = req.file.path;
      await foodsModel.create(req.body);
      res.redirect('/foods/addFood');
    } catch (error) {
      res.json(error);
    }
  }

  async detail(req, res){
    const food = await foodsModel.findOne({ _id: req.params.id });
    
    const loginToken = req.signedCookies.loginToken;
    const userID = jwt.verify(loginToken, process.env.SECRET).id;
    
    const similarFoods = await foodsModel.find({ category: food.category });
    res.render('foods/detailFood', { title: food.name, food, similarFoods, userID });
  }

}

module.exports = new foodsController();