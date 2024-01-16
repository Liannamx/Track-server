const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = new User({ email, password });
    await user.save();
  
    response.send("You made a post request");
  } catch (err) { 
    response.status(422).send(err.message);
  }
});

module.exports = router;
