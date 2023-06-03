//acquring mongoose to access database
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
//connecting to the database
mongoose
  .connect("mongodb://localhost:27017/mess")
  .then(() => {
    console.log("Database is connected Successfull....");
  })
  .catch((err) => {
    console.log("Connot connect to the database....");
    console.log(err);
  });
