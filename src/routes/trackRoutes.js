const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (request, response) => {
    const tracks = await Track.find({ userId: request.user._id });

    response.send(tracks);
});

module.exports = router;
