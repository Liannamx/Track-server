const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (request, response, next) => {
  const { authorization } = request.headers;
  const errorMessage = "You must be logged in.";
  const errorStatus = 401;

  if (!authorization) {
    return response.status(errorStatus).send({ error: errorMessage });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY_SECRET_KEY", async (error, payload) => {
    if (error) {
      return response.status(errorStatus).send({ error: errorMessage });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    request.user = user;
    next();
  });
};
