const express = require("express");
const swal = require("sweetalert");

let router = express.Router();

router.get("/", (req, res) => {
  swal("Oops!", "Something went wrong!", "error");
  res.render("index", { result: "" });
  console.log("rendering index page");
});

module.exports = router;
