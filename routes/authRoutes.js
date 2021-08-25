const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var salt = 10;
module.exports = (app, db) => {
  app.post("/signup", async (req, res) => {
    var email = req.body.email;
    var password = await bcrypt.hash(req.body.password, salt);

    var usersCollection = db.getDB().collection("users");
    usersCollection.findOne({ email: email }, (err, doc) => {
      console.log(doc, "this is doc");
      if (doc) {
        res.status(409).json({ done: false });
      } else {
        usersCollection.insertOne({
          email: email,
          password: password,
          picture: "",
          account_type: "local",
          cart: [],
          payment: {},
        });
        res.status(201).send("user has been created");
      }
    });
  });

  app.post("/login", async (req, res) => {
    var { email, password } = req.body;
    var usersCollection = db.getDB().collection("users");
    usersCollection.findOne({ email: email }, async (err, doc) => {
      if (doc) {
        var pwdCorrect = await bcrypt.compare(password, doc.password);

        if (pwdCorrect) {
          var user = { id: doc._id, email: doc.email, picture: doc.picture };
          var tokenData = { email: email, id: doc._id };

          const token = jwt.sign(
            JSON.stringify(tokenData),
            process.env.JSON_TOKEN
          );
          user.token = token;
          res.status(200).json(user);
        } else {
          res.status(400).send("Email or Password is invalid");
        }
      } else {
        res.status(404).send("Email does not exist");
      }
    });
  });
};
