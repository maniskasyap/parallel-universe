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
exports.getAll = (req, res) => {
  CoolCat.find()
    .then(cats => {
      res.send(cats);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "error fetching cats..."
      });
    });
};
exports.getOne = (req, res) => {
  CoolCat.findById(req.params.catId)
    .then(cat => {
      if (!cat) {
        return res.status(404).send({
          message: "No cat with id " + req.params.catId + " found..."
        });
      }
      res.send(cat);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error finding cat with id " + req.params.catId
      });
    });
};
exports.update = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Cat name can not be empty"
    });
  }
  CoolCat.findByIdAndUpdate(
    req.params.catId,
    {
      name: req.body.name,
      style: req.body.style,
      avatar: req.body.avatar
    },
    { new: true }
  )
    .then(cat => {
      if (!cat) {
        return res.status(404).send({
          message: "No cat found with id " + req.params.catId
        });
      }
      res.send(cat);
    })
    .catch(err => {
      return res.status(500).send({
        message: "Error updating cat with id " + req.params.catId
      });
    });
};
exports.remove = (req, res) => {};
