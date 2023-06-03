const express = require("express");
let router = express.Router();

const comp = require("../model/complaint");

router.post("/api/contact", (req, res) => {
  try {
    let newC = new comp({
      name: req.body.nam,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    newC
      .save()
      .then(() => {
        console.log("complaint added");
        res.send("success");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
