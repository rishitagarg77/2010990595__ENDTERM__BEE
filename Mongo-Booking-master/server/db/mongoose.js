const mongoose = require("mongoose");
const database = "BS";
const dbUrl = "mongodb" + "://localhost:27017/" + database;

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

module.exports = { mongoose };
