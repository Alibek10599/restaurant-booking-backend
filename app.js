const express = require("express");
const path = require("path");
const cors = require('cors');

var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var restarauntRouter = require('./routes/restaraunt');
var orderRouter = require('./routes/order')
var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/restaraunts', restarauntRouter);
app.use('/orders', orderRouter)


//db connection
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   password: 'password',
//   user: 'root', 
//   host: 'localhost',
//   database: 'restaraunt'
// });
// connection.connect(function(err) {
//   if (err) {
//     console.log('erroer')
//     console.error('error connecting: ' + err.stack);
//     return 1;
//   }



app.get("*", (req, res) => {
   res.sendStatus(404);
});

module.exports = app;
