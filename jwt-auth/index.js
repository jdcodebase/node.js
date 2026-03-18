const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    const token = jwt.sign({ email: email }, "secretKey", { expiresIn: "1h" });

    return res.json({ token });
  }

  res.send("Invalid");
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, "secretKey");
    req.user = verified;
    next();
  } catch (error) {
    res.send("Invalid Token");
  }
};

app.get("/profile", (req, res) => {
  console.log(req.user);
  res.send("Protected");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
