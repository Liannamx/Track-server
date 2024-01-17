const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    response.send({ token });
  } catch (err) {
    return response.status(422).send(err.message);
  }
});

module.exports = router;
