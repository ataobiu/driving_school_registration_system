var createError = require('http-errors'); // http错误处理模块
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const { expressjwt: jwt } = require("express-jwt")
const cors = require('cors')
const secret = "Hash('哈哈')"

var usersRouter = require('./routes/users');
var formRouter = require('./routes/form');
var examRouter = require('./routes/exam');

var app = express();
var http = require('http');

var server = http.createServer(app);

app.use(cors())
app.use(express.json())
//  配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 托管静态资源
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwt({ secret: secret, algorithms: ['HS256'] }).unless({ path: [/^\/user\//, '/form/submit'] }));

app.use(logger);

app.use('/form', formRouter);
app.use('/user', usersRouter);
app.use('/exam', examRouter);

function logger(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] --- ${req.method} --- ${req.url}`);
  next()
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
server.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000');
})

