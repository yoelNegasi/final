const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Information = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  address: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  arrival_time: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});
module.exports = mongoose.model("Info", Information);
