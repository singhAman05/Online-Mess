const express = require("express");
let router = express.Router();

const student = require("../model/users");

//rendering login page
router.get("/", (req, res) => {
  res.render("login");
  console.log("rendering login page");
});

//verifying the user
router.post("/api/login", async (req, res) => {
  try {
    const u_email = req.body.email;
    const u_pass = req.body.pass;

    const stu = await student.findOne({ email: u_email });

    if (stu.pass === u_pass) {
      res.render("index");
      console.log("user verified");
    }
  } catch (error) {
    res.send("Invalid Email");
    console.log(error);
  }
});

module.exports = router;
