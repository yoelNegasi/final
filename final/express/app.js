const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let infoSchema = require("./info");
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://yoelnegasi:yoel123@test1.w3ihr.mongodb.net/babysitter?retryWrites=true&w=majority"
);

mongoose.connection.once("open", function () {
  console.log("mongoose");
});
app.post("/info", function (req, res) {
  let infoObj = req.body;
  let newInfo = new infoSchema(infoObj);

  newInfo.save().then((response) => {
    console.log(response);
    res.send(response);
  });
});
app.get("/find", function (req, res) {
  infoSchema.find(function (err, response) {
    res.json(response);
  });
});
app.delete("/delete", function (req, res) {
  console.log("deleted", req.body);
  let id = req.body.id;
  infoSchema.findByIdAndDelete(id, function (err, deletion) {
    res.send(deletion);
  });
});
app.listen("3001", function (req, res) {
  console.log("running");
});
