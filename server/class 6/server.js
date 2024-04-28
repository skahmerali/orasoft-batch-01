const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = process.env.MONGO_DB;
let PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_DB).then(() => console.log("Connected!"));

const SignupModel = new Schema({
  email: String,
  DOB: String,
  name: String,
  fatherName: String,
  gender: String,
  password: String,
});
const SomeModel = mongoose.model("singup", SignupModel);

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { email, DOB, name, fatherName, gender, password } = req.body;

    if (!email) {
      res.status(401).send({
        message: "email required",
      });
    } else if (!password) {
      res.status(401).send({
        message: "password required",
      });
    } else {


      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      console.log(email, "email");
      const result = new SomeModel({
        email: email,
        DOB: DOB,
        name: name,
        fatherName: fatherName,
        gender: gender,
        password: hash  ,
      });
      result.save();
      res.send({
        status: 200,
        message: "Successfully save the data",
        data: result
      });
    }
  } catch {
    res.send({
      status: 404,
      message: "Fail to save the data",
    });
  }
  // const email = req.body;
});

app.listen(PORT, function () {
  console.log("server is lisning on the post of  " + PORT);
});
