const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

function myMiddleware(req, res, next) {
  console.log("Custom Middleware");
  next();
}

app.use(myMiddleware);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
