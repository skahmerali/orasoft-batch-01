const express = require("express");
const { modules } = require("../db/db");
const api = express();
const { Users } = require("../models/db.models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
api.post("/signup", async (req, res) => {
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

      let IsUser = await Users.findOne({ email: email });
      console.log("found User ", IsUser);

      if (IsUser) {
        res.status(401).send({
          message: "User already exist",
        });
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const result = await new Users({
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
  } catch (error) {
    console.log(error);
    res.send({
      status: 404,
      message: "Fail to save the data",
    });
  }
  // const email = req.body;
});

api.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).send({
      message: "email and passred required",
    });
  } else {
    const IsUser = await Users.findOne({ email: email });

    if (IsUser) {
      // console.log("user", IsUser);

      bcrypt.compare(password, IsUser.password, function (err, result) {
        // console.log("result ==> ", result)
        // console.log('error ==>' , err)

        if(err){
          console.log('Error when comparign passord  ', err)
          res.status(401).send({
            message: 'incorrect Email or password',
            status: false
          })
          return;
        }


        if (result) {
          console.log(IsUser);

          let token = jwt.sign(
            {
              name: result.name,
              email: result.email,
            },
            process.env.TOKEN_SECRET
          );

          console.log("Token", token);

          res.cookie('Token', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
          res.status(200).send({
            message: "Login Success",
            data:{
              _id: IsUser._id,
              email :IsUser.email,
            },
            status : true
          });
        } else {
          res.status(401).send({
            message: "incorrect Email or password",
            status: false
          });
        }
      });
    } else {
      res.status(401).send({
        message: "User not found",
        status: false,
      });
    }
  }
});

module.exports = api;
