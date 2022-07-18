const usersModel = require('../models/usersModel');
const jwt = require("jsonwebtoken");

class usersController{
  async index(req, res){
    const loginToken = req.signedCookies.loginToken;
    const userID = jwt.verify(loginToken, process.env.SECRET).id;
    
    const user = await usersModel.findOne({ _id: userID });
    
    res.render('users/profile', { user });
  }

  login(req, res){
    res.render('users/login', { title: 'Login' });
  }

  async _login(req, res){
    try {
      const user = await usersModel.findOne({ username: req.body.username });
      if (!user) {
        return res.json('ko ton tai');
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.cookie('loginToken', token, { signed: true });
      res.redirect('/user');
    } catch (error) {
      
    }
  }  

  logout(req, res){
    res.clearCookie('loginToken');
    res.redirect('/user');
  }

  register(req, res){
    res.render('users/register', { title: 'Register' });
  }

  async _register(req, res){
    try {
      const isExisted = await usersModel.findOne({ username: req.body.username });
      if (isExisted) {
        console.log(isExisted);
        return res.json('da ton tai username nay');
      }
      await usersModel.create(req.body);
      res.redirect('/user/login');

    } catch (error) {
      res.json({ error });
    }
  }

  async update(req, res){
    try {
      req.body.avatar = req.file.path;
      await usersModel.updateOne({ _id: req.body.id }, req.body);
      res.redirect('/user');
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new usersController();

