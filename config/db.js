const MongoClient = require("mongodb").MongoClient;
const MongoOptions = require("mongodb").MongoOptions;
require("dotenv").config({ path: ".env" });

let uri = process.env.MONGO_URI;

let dbname = "ecomm_db";
console.log(uri);
var state = {
  db: null,
};

var connect = (cb) => {
  if (state.db) cb();
  else {
    MongoClient.connect(uri, MongoOptions, (err, client) => {
      if (err) cb(err);
      else {
        state.db = client.db(dbname);
        cb();
      }
    });
  }
};

var getDB = () => {
  return state.db;
};

module.exports = { getDB, connect };
