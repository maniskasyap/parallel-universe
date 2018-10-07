const CoolCat = require("../models/cool-cat.model.js");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Cat name can't be empty"
    });
  }

  const myCoolCat = new CoolCat({
    name: req.body.name,
    style: req.body.style || "",
    avatar: req.body.avatar || ""
  });

  myCoolCat
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred..."
      });
    });
};
exports.getAll = (req, res) => {};
exports.getOne = (req, res) => {};
exports.update = (req, res) => {};
exports.remove = (req, res) => {};
