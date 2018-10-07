const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(
    dbConfig.url,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("connected to db...", dbConfig.url);
  })
  .catch(err => {
    console.log("could not connect to db...", dbConfig.url, err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "welcome to parallel universe." });
});

app.listen(PORT, () => {
  console.log(`express server is listening on port ${PORT}`);
});
