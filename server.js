var express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const db = require("./config/db");
var app = express();
var bodyParser = require("body-parser");
require("dotenv").config({ path: ".env" });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(process.cwd() + "/ecommerce-cli/build"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/ecommerce-cli/build/index.html");
});
app.get("/homeProducts", (req, res) => {
  const productsCollection = db.getDB().collection("products");

  productsCollection
    .find({ featured: true })
    .toArray()
    .then((items) => {
      res.json(items);
    });
});

app.post("/signup", (req, res) => {
  var usersCollection = db.getDB().collection("users");
  var email = req.body.email;
  var pwd = req.body.password;
  usersCollection.findOne({ email: email }, (err, doc) => {
    if (doc) {
      res.status(409).send({ done: false });
    } else {
      usersCollection.insertOne({ email: req.body.email });
    }
  });

  res.json({ email: "aaryabhorra130502@gmail.com" });
});

app.post("/login", (req, res) => {
  res.json({ email: "aaryabhorra130502@gmail.com" });
});
app.get("/product/:id", (req, res) => {
  const productsCollection = db.getDB().collection("products");

  productsCollection.findOne({ _id: ObjectId(req.params.id) }, (err, doc) => {
    res.json(doc);
  });
});
db.connect(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening");
  });
});
