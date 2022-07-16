module.exports = (req, res, next) => {
  const isLogged = req.signedCookies.loginToken;
  
  if (!isLogged) {
    return res.redirect('/login');
  }
  
  next();
}