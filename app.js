const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("Hello Everyone!");
});

app.listen(port, () => {
  console.log("Server started in port " + port + ".");
});
