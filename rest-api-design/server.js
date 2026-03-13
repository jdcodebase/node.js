const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({
    message: "Get all users",
  });
});

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User Created",
  });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: "User Updated" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
