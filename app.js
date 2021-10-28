const express = require("express");
const path = require("path");
const cors = require('cors');

var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var restarauntRouter = require('./routes/restaraunt');
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
//db connection
var mysql = require('mysql');
var pool = mysql.createPool({
  host: "loc",
  user: "root",
  password: 'Alrekkr10599'
});
var connection = mysql.createConnection({
  pass: 'Alrekkr10599',
  user: 'root', 
  host: '127.0.0.1',
  port: '3306'
});
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

app.listen(3000, () => {
  console.log("started development server on port 3000");
});
module.exports = app;
