// DEPENDENCIES
const express = require("express");
const render = require("./render.js");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
  res.send(render("Home"));
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

//Connecting MONGOOSE
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
