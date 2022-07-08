class foodsController{
  index(req, res){
    res.json('foods');
  }
}

module.exports = new foodsController();