const express = require("express");

const app = express();

require("./config/db");

const User = require("./models/User");

const user = new User({
  name: "John",
  age: 25,
  email: "john@gmail.com",
});
const user1 = new User({
  name: "JD",
  age: 30,
  email: "jd@gmail.com",
});
user1.save();

user.save();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
