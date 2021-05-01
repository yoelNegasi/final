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
    type: Number,
  },
  arrival_time: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});
module.exports = mongoose.model("Info", Information);
