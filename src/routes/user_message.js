const express = require("express");
let router = express.Router();
const swal = require("sweetalert");

const comp = require("../model/complaint");

router.post("/", (req, res) => {
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
        // res.send("success");
        res.render("index", { result: "Your message have been recorded" });
        swal("Oops!", "Something went wrong!", "error");
      })
      .catch((err) => {
        res.render("index", { result: "Sorry cannot send data right now" });
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
