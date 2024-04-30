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
const UserModel = mongoose.model("singup", SignupModel);

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
      console.log(email, "email");

      let IsUser = await UserModel.findOne({ email: email });
      console.log("found User ", IsUser);

      if (IsUser) {
        res.status(401).send({
          message: "User already exist",
        });
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const result = await new UserModel({
          email: email,
          DOB: DOB,
          name: name,
          fatherName: fatherName,
          gender: gender,
          password: hash,
        });
        result.save();
        res.send({
          status: 200,
          message: "Signup success",
        });
      }
    }
  } catch {
    res.send({
      status: 404,
      message: "Fail to save the data",
    });
  }
  // const email = req.body;
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).send({
      message: "email and passred required",
    });
  } else {
    const IsUser = await UserModel.findOne({ email: email });

    if (IsUser) {
      console.log("user", IsUser);

      bcrypt.compare(password,IsUser.password, function (err, result) {
        
        // console.log("result ==> ", result)
        // console.log('error ==>' , err)
        if(result){
          res.status(200).send({
            message : 'User not found'
          })
        }else{
          res.status(401).send({
            message : 'incorrect Email or password'
          })
        }
      });
    }else{
      res.status(401).send({
        message : 'User not found'
      })
    }
  }
});

app.listen(PORT, function () {
  console.log("server is lisning on the post of  " + PORT);
});
