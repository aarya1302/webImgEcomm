var express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const db = require("./config/db");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const browsingRoutes = require("./routes/browsingRoutes");
const authRoutes = require("./routes/authRoutes");
var app = express();
require("dotenv").config({ path: ".env" });

//middleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(process.cwd() + "/ecommerce-cli/build"));

//routes
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/ecommerce-cli/build/index.html");
});

authRoutes(app, db);
browsingRoutes(app, db);

db.connect(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening");
  });
});
