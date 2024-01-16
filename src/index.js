const express = require("express");
const mongoose = require('mongoose');

const app = express();

const mongoURL = "mongodb+srv://liannamaksimova:K4DqyH6DqSpGntIE@track-server.wnvuvc6.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL);
mongoose.connection.on("connected", () => { 
    console.log('Connected to mongo instance');
});
mongoose.connection.on("error", () => { 
    console.error('Error connecting to mongo', err);
});

app.get("/", (request, response) => {
  response.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listnening on port 3000");
});
