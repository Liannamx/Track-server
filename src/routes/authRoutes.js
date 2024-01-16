const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (request, response) => {
  const { email, password } = request.body;

  const user = new User({ email, password });
  await user.save();

  response.send("You made a post request");
});

module.exports = router;
