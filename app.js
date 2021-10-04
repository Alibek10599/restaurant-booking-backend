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

var con = mysql.createConnection({
  database: 'restaraunt',
  host: "table+",
  user: "",
  password: ''
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.listen(3000, () => {
  console.log("started development server on port 3000");
});
module.exports = app;
