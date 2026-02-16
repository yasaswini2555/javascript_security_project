// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// // app.get("/time", function (req, res) {
// //   var time = new Date().toLocaleTimeString();
// //   res.send(`time is : ${time}`);
// // });
// // app.get("/date", function (req, res) {
// //   var date = new Date().toLocaleDateString();
// //   res.send(`date is : ${date}`);
// // });
// app.get("/square/:n", function (req, res) {
//   var n = Number(req.params.n);
//   res.send(`square of ${n} is : ${n * n}`);
// });
// app.get("/addition/:a/:b", function (req, res) {
//   var a = parseInt(req.params.a);
//   var b = parseInt(req.params.b);
//   res.send(`addition of ${a} and ${b} is : ${a + b}`);
// });
// app.listen(9000, function () {
//   console.log("API started listening..........................");
// });
// const express = require("express");
// const app = express();
// app.use(express.json());
// let users = [
//   { id: 1, name: "Ali", age: 25 },
//   { id: 2, name: "Sara", age: 30 },
// ];
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     age: req.body.age,
//   };
//   users.push(newUser);
//   res.send(newUser);
// });
// app.get("/users", (req, res) => {
//   res.send(users);
// });
// app.get("users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);
//   if (!user) return res.status(404).send("User not found");
//   res.send(user);
// });
// app.put("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);
//   if (!user) return res.status(404).send("User not found");
//   user.name = req.body.name;
//   user.age = req.body.age;
//   res.send(user);
// });
// app.delete("/users/:id", (req, res) => {
//   users = users.filter((u) => u.id != req.params.id);
//   res.send("User deleted");
// });
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
