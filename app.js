const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  const message = process.env.MESSAE || "Hello World" ;
  res.send(message);
});

module.exports = app;
