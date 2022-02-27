const cookieParser = require("cookie-parser");
 const logger = require("morgan");
 const express = require('express')
 const app = express();
 var cors = require('cors')
 app.use(logger("dev"));
 app.use(cors());

 
 module.exports = app;
