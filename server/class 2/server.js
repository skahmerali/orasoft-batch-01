var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
const PORT = 5000;
var bodyParser = require("body-parser");

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
app.get("/signup", (req, res) => {
  //  res.send("welcome to class 2 ");
  const { fName, lastName, email, password, dateOfBirth, gender } = req.body;
  // var data = "this is our second class";
  var data = database.push(req.body);
  console.log(database)

  res.send({
    status: 200,
    message: "Successfully send a response",
  });
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
