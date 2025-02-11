const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const mongoUrl = require("./keys");

mongoose.connect(mongoUrl);

mongoose.connection.on("connect", () => {
  console.log("successfully connected to mongo");
});

mongoose.connection.on("error", () => {
  console.log("not connected to mongodb");
});

app.listen(port, () => {
  console.log("server is running on port" + port);
});
