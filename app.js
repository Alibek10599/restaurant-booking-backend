const express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//db connection
var mysql = require('mysql');

var con = mysql.createConnection({
  database: 'employeedb',
  host: "localhost",
  user: "root",
  password: "12345"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3000, () => {
  console.log("started development server on port 3000");
});
module.exports = app;
