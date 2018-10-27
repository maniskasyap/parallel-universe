const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema(
  {
    userName: String,
    name: String,
    password: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", AuthSchema);
