const express = require("express");
const Note = require("./models/Note.js");

const app = express();

app.use(express.json());

require("./config/db.js");

app.post("/notes", async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.put("/notes/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body);

  res.json(note);
});

app.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({ message: "Note Deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
