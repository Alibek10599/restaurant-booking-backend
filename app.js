var cookieParser = require("cookie-parser");
 var logger = require("morgan");
 
 var app = express();
 
 app.use(logger("dev"));
 app.use(cors());
 module.exports = app;