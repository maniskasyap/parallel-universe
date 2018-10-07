const mongoose = require("mongoose");

const CoolCatSchema = mongoose.Schema(
  {
    name: String,
    style: String,
    avatar: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("CoolCat", CoolCatSchema);
