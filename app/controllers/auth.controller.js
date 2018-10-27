const jwt = require("jsonwebtoken");
const User = require("../models/auth.model");

exports.login = (req, res) => {
  User.findOne({
    userName: req.body.userName
  })
    .lean()
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      if (!user) {
        return res.status(404).send({
          message: "No user with user name " + req.params.userName + " found..."
        });
      }
      if (req.body.password !== user.password) {
        return res.status(401).send({
          message: "Unauthorized user..."
        });
      }
      const auth = {
        userName: user.userName,
        name: user.name
      };
      const objUser = {
        ...auth,
        token: jwt.sign(auth, "shhhhh")
      };
      res.send(objUser);
    });
};
