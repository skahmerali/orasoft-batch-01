var http = require("http");
var fs = require("fs");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
const PORT = 5000;
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// let database = [
//   {
//     fName,
//     lastName,
//     email,
//     password,
//     dateOfBirth,
//     gender,
//   },
// ];
let database = [];
app.post("/signup", (req, res) => {
  //  res.send("welcome to class 2 ");
  console.log(req);
  const { fName, lastName, email, password, dateOfBirth, gender } = req.body;
  // var data = "this is our second class";
  var data = database.push(req.body);
  console.log(database);

  res.send({
    status: 401,
    message: "Successfully send a response",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  if (database.length > 0) {
    database.map((value) => {
      console.log(database);
      if (value.email === req.body.email) {
        if (value.password === req.body.password) {
          res.send({
            satus: 200,
            message: "Login success",
          });
        } else {
          res.send({
            satus: 401,
            message: "Invalid Credentials",
          });
        }
      } else {
        res.send({
          status: 401,
          message: "Invalid Credentials",
        });
      }
    });
  }else{
    res.send({statu: 401, message: 'user Not Found'})
  }
});

app.listen(PORT, () => {
  console.log(`app is running on : ${PORT} `);
});

// var server = http.createServer((req, res) => {
//   //   res.send({
//   //     status: 200,
//   //     message : "Hello Orasoft Training Institute"
//   //   });

//   res.end("hello world");
// });
// fs.writeFile("test.text", "My name is sheikh Ahmer Ali", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data, "line 16");
//   }
// });
// fs.readFile("test.text", "utf8", (err, data) => {
//   console.log("data===>", data);
// });
// server.listen(5000, () => {
//   console.log("server is running");
// });
