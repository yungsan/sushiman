class foodsController{
  index(req, res){
    res.render('foods/foods', { title: 'Foods' });
  }
}

module.exports = new foodsController();