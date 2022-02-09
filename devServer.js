const app = require("./app");
const port = 4000 //process.env.PORT || 3000;

const routes = require("./routes/router");
app.use("/", routes);
app.listen( port ,function () {
   console.log("Server started. Go to http://localhost:" + port);
});