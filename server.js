const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to parallel universe." });
});

app.listen(PORT, () => {
  console.log(`express server is listening on port ${PORT}`);
});
