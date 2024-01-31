// var promis = new Promise(function (resolve, reject) {
//   reject("dsfkjl");
// });

// console.log(promis);
// let response = promis.then(function (res) {
//   console.log(res);
// });

// let response = promis
//   .then(() => {})
//   .catch(function (error) {
//     console.log(error);
//   });

// var promis = new Promise(function (resolve, reject) {
//   //   reject("dsfkjl");
//   reject('an errot accurd');
// });

// async function apicall() {
//   try {
//     let resonse = await promis.then(function (res) {
//       console.log(res);
//       return res;
//     });
//   } catch (error) {
//     console.log(error);
//   }

// //   console.log("api response ", resonse);
// }

// apicall();
// function apicall() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// apicall();

// let promis = new Promise(function (resolve, reject) {
//   resolve({ name: "zubair", position: "full stack" });
// });

// promis.then(function (res) {
//   console.log(res);
//   return res.position;
// }).then(function(res){
//     console.log(res)
// });
