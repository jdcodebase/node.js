const Note = require("../models/noteModel");

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body);

  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({ message: "Note Deleted" });
};
