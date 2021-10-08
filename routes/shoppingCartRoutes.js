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

  app.get("/add_to_cart/:user_id/:product_id", (req, res) => {
    var { user_id, product_id } = req.params;

    const usersCollection = db.getDB().collection("users");

    const productsCollection = db.getDB().collection("products");
    usersCollection.findOne({ _id: ObjectId(user_id) }, (err, doc) => {
      try {
        productsCollection.findOne(
          { _id: ObjectId(product_id) },
          (err, prod) => {
            usersCollection.updateOne(
              { _id: ObjectId(user_id) },
              { $push: { cart: prod } },
              (err, x) => {
                usersCollection.findOne(
                  { _id: ObjectId(user_id) },
                  (err, final_doc) => {
                    res.json(final_doc.cart);
                  }
                );
              }
            );
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    });
  });

  app.post("/removeCartItem/:user_id/:item_id", (req, res) => {
    var { user_id, item_id } = req.params;

    const usersCollection = db.getDB().collection("users");
    usersCollection.updateOne(
      { _id: ObjectId(user_id) },
      { $pull: { cart: { _id: ObjectId(item_id) } } },
      () => {
        usersCollection.findOne({ _id: ObjectId(user_id) }, (err, doc) => {
          res.json(doc.cart);
        });
      }
    );
  });
};
