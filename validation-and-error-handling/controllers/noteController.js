const Note = require("../models/noteModel");
const CustomError = require("../utils/CustomError");

exports.createNote = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      // return res.status(400).json({
      //   message: "Title is required",
      // });

      return next(new CustomError("Title is required", 400));
    }

    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body);

  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({ message: "Note Deleted" });
};
