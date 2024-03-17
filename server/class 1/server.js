var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  //   res.send({
  //     status: 200,
  //     message : "Hello Orasoft Training Institute"
  //   });

  res.end("hello world");
});
fs.writeFile("test.text", "My name is sheikh Ahmer Ali", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "line 16");
  }
});
fs.readFile("test.text", "utf8", (err, data) => {
  console.log("data===>", data);
});
server.listen(8000, () => {
  console.log("server is running");
});
