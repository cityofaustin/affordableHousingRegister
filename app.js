var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/Users');
var usersRouter = require('./routes/Users')
var compression = require('compression');
var helmet = require('helmet');

var app = express();

app.use(compression()); //Compress all routes
app.use(helmet());
app.set('views', '/app/views');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Static file declaration
app.use(express.static(path.join(__dirname, '/public')));


app.use(logger('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("There is an error, catch all...");
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("Error handler: ");
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
