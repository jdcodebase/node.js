const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send("List of users");
});

app.post("/users", (req, res) => {
  res.send("User Created");
});

app.put("/users", (req, res) => {
  res.send("User updated");
});

app.delete("/users", (req, res) => {
  res.send("User Delete");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
