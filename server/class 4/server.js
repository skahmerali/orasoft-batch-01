const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const db = "mongodb+srv://orasoft:orasoft12345@cluster0.mxddhps.mongodb.net/";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SignupModel = new Schema({
  email: String,
  DOB: Date,
  name: String,
  fatherName: String,
  gender: String,
  password: String,
});
const SomeModel = mongoose.model("singup", SignupModel);
app.post("/signup", (req, res) => {
  const { name, fatherName, DOB, gender, email, password } = req.body;

  // const email = req.body;
});
