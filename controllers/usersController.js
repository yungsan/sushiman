class usersController{
  index(req, res){
    res.render('users/login', { title: 'Login' });
  }
}

module.exports = new usersController();

