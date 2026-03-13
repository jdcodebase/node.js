const express = require("express");

const app = express();

app.use(express.json());

// app.post("/users", (req, res) => {
//   const newUser = req.body;
//   res.send(newUser);
// });

// app.get("/users/:id/:pdtId", (req, res) => {
//   const id = req.params.id;
//   const pdtID = req.params.pdtId;
//   console.log(pdtID);

//   res.send("User Id is :" + id);
// });

// app.get("/search", (req, res) => {
//   res.send(req.query);
// });

let users = [
  { id: 1, name: "john" },
  { id: 10, name: "Jane" },
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send("User added");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;

  const updatedData = req.body;

  const user = users.find((u) => u.id == id);

  if (user) {
    user.name = updatedData.name;
  }
  console.log(users);
  res.send("User Updated");
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((u) => u.id != id);

  res.send(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
