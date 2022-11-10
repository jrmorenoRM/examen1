var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors')
var indexRouter = require('./routes/index');
var app = express();

app.use(session({
  secret: 'app nodejs'
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var op = {
  origin: "*",
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}
app.use(cors(op));



app.use('index', cors(op), indexRouter);


app.use(function(req, res, next) {
  // next(createError(404));
  var f = new Date();
  let aa = f.getFullYear()
  let anio = `© ${aa}`
  res.render('error', {
    copyr: anio,
    title: "error",
    message: "La pagina solicitada no existe"
  });
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;