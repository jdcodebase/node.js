const express = require("express");
require("./config/db.js");

const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(express.json());
app.use("/api", noteRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
