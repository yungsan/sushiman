const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const methodOverride = require('method-override');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.TOKEN_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

const siteRouter = require('./routers/sitesRouter');
const foodsRouter = require('./routers/foodsRouter');
const usersRouter = require('./routers/usersRouter');
app.use('/', siteRouter);
app.use('/foods', foodsRouter);
app.use('/user', usersRouter);

app.listen(process.env.PORT || 6996, function(){
  console.log("http://localhost:%d in %s mode", this.address().port, app.settings.env);
});