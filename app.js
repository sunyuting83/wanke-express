var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var recentlyRouter = require('./routes/recently');
var recordlistRouter = require('./routes/record');
var historyRouter = require('./routes/history');

var app = express();

// view engine setup
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/recently', recentlyRouter);
app.use('/monitorRecordList', recordlistRouter);
app.use('/marketHistoryList', historyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;