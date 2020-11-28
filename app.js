const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Server started in port " + port + ".");
});
