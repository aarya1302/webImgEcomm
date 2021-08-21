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
          pictures: "",
          account_type: "local",
          cart: [],
          payment: {},
        });
        res.status(201).send("user has been created");
      }
    });
  });

  app.post("/login", async (req, res) => {
    var pwd = req.body.pwd;
    console.log(pwd);
    var usersCollection = db.getDB().collection("users");
    usersCollection.findOne({ email: email }, (err, doc) => {
      if (doc) {
        var pwdCorrect = await bcrypt.compare(pwd, doc.password);
        console.log(pwdCorrect, "4this is pwd correct");
        if (pwdCorrect) {
          var user = doc;
          const token = jwt.sign({ email }, process.env.TOKEN_KEY);
          user.token = token;
          res.status(200).json(user);
        } else {
          res.status(400).message("Email or Password is invalid");
        }
      } else {
        res.status(404).send("Email does not exist");
      }
    });
  });
};
