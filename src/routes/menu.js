const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.render("menu");
  console.log("rendering menu page");
});

module.exports = router;
