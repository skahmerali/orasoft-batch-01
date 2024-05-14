const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const { Users } = require("./src/models/db.models");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken")
require("dotenv").config();

// const fs = require("fs");
// const mongoose = require("mongoose");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// const db = process.env.MONGO_DB;
let PORT = process.env.PORT || 5000;

const AuthRoute = require("./src/routes/authRoute");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000" }));
const db = require("./src/db/db");
app.use("/", AuthRoute);

app.use(function (req, res, next) {
  console.log(req.cookies);

if(req.cookies.Token){
  jwt.verify(req.cookies.Token, process.env.TOKEN_SECRET,function(err, decodedData ){
  console.log("error when verifying cookie", err)
  console.log("data ",decodedData)

    if(decodedData){
      let issuedat = decodedData.iat * 1000
      
      let nowTime = Date.now()
      console.log("issed time", nowTime)
      let diff = nowTime - issuedat
        console.log(" Titme differnce", diff)

      if(diff > 600000){
        res.status(500).send({
          message:"no activity"
        })
      }else{
        next()
      }
    }


  })

  

    





  } else {
    res.status(401).send({
      message: "session expire",
      status: false,
    });
  }
});

app.get("/profile", async function (req, res) {
  try {
    console.log(req.body);

    const data = await Users.findOne({ _id: req.body._id });

    console.log("profile data ", data);

    res.status(401).send({
      data: {
        _id: data._id,
        email: data.email,
        DOB: data.DOB,
        name: data.name,
        fatherName: data.fatherName,
        gender: data.gender,
      },
      status: true,
    });
  } catch (error) {
    console.log("error in profile api ", error);

    res.status(401).send({
      message: "Invalid User Id",
      status: false,
    });
  }
});

app.listen(PORT, function () {
  console.log("server is lisning on the post of  " + PORT);
});
