var cookieParser = require("cookie-parser");
 var logger = require("morgan");
 const express = require('express')
 var app = express();
 var cors = require('cors')
 app.use(logger("dev"));
 app.use(cors());
 module.exports = app;
