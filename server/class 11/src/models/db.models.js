const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const UserMdel = new Schema({
  email: String,
  DOB: String,
  name: String,
  fatherName: String,
  gender: String,
  password: String,
});

const Users = model("Users", UserMdel);

module.exports = {
  Users: Users,
};
