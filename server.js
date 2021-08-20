var express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const db = require("./config/db");
var app = express();
require("dotenv").config({ path: ".env" });

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
app.get("/product/:id", (req, res) => {
  console.log(req.params, "right here");
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
