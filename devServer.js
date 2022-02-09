const app = require("./app");
const port = 4000 //process.env.PORT || 3000;

// const routes = require("./routes/router");
// app.use("/", routes);
app.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
app.listen( port ,function () {
   console.log("Server started. Go to http://localhost:" + port);
});