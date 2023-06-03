const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  console.log("rendering index page");
});

module.exports = router;
