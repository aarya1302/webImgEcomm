const { ObjectId } = require("mongodb");

module.exports = (app, db) => {
  app.get("/getShoppingCartItems", (req, res) => {
    const usersCollection = db.getDB().collection("users");
    usersCollection.findOne({ id: ObjectId(req.parama.id) }, (err, doc) => {
      try {
        res.json(doc.cart);
      } catch (err) {
        console.log(err.message);
      }
    });
  });
};
