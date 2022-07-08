const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.render('home/home', { title: 'Shushi Man' });
})

module.exports = app;