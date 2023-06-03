const mongoose = require("mongoose");

//creating a schema

const comp = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
});

//creating a model
const newComp = mongoose.model("complaints", comp);

//exporting model
module.exports = newComp;
