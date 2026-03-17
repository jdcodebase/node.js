const express = require("express");
require("./config/db.js");

const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(express.json());
app.use("/api", noteRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
