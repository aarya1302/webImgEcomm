const { ObjectId } = require("mongodb");

module.exports = (app, db) => {
  app.get("/homeProducts", (req, res) => {
    console.log("inside homeproducts");
    const productsCollection = db.getDB().collection("products");
    productsCollection
      .find({ featured: true })
      .toArray()
      .then((items) => {
        res.json(items);
      });
  });
  app.get("/product/:id", (req, res) => {
    const productsCollection = db.getDB().collection("products");
    productsCollection.findOne({ _id: ObjectId(req.params.id) }, (err, doc) => {
      res.json(doc);
    });
  });
};
