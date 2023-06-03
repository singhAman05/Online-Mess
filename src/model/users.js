const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: String,
  pass: String,
});

const nUser = mongoose.model("student", user);

module.exports = nUser;
