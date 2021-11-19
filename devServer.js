const app = require("./app");
const port = process.env.PORT || 5000;

const routes = require("./routes/router");
app.use("/", routes);
app.listen( port ,function () {
   console.log("Server started. Go to http://localhost:" + port);
});