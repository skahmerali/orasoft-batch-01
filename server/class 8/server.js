const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config();
// const fs = require("fs");
// const mongoose = require("mongoose");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// const db = process.env.MONGO_DB;
let PORT = process.env.PORT || 5000;


const AuthRoute = require('./src/routes/authRoute')
const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:3000" }));
const db = require('./src/db/db')
app.use('/', AuthRoute)


// const Schema = mongoose.Schema;
// mongoose.connect(process.env.MONGO_DB).then(() => console.log("Connected!"));

// const SignupModel = new Schema({
//   email: String,
//   DOB: String,
//   name: String,
//   fatherName: String,
//   gender: String,
//   password: String,
// });
// const UserModel = mongoose.model("singup", SignupModel);



app.listen(PORT, function () {
  console.log("server is lisning on the post of  " + PORT);
});
