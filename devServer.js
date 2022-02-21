const app = require("./app");
const port = process.env.PORT || 3000;
const db = require("./database-check");

// const routes = require("./routes/router");
// app.use("/", routes);
app.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
app.listen( port ,function () {
   console.log("Server started. Go to http://localhost:" + port);
});