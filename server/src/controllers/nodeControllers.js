import Note from "../models/note.js";
//Controllers are the fuctions that handle the requests and send responses
//They are imported in the routes file and used as middleware for specific routes
//They are pulled inside the routes to call the functions when the route(aka endpoint) is hit
//-1 means sorting in descending order

export async function getAllNotes(_, res) {
  try {
    const notes = (await Note.find().sort({ createdAt: -1 })); 
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in fetching notes:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function getNotesById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in fetching note by ID:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const noteCraeted = await newNote.save();
    if (!noteCraeted) {
      return res.status(400).json({ message: "Failed to create note" });
    }
    res.status(201).send({ message: "Note created", note: { title, content } });
  } catch (error) {
    console.error("Error in creating note:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const noteUpdated = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!noteUpdated) {
      return res.status(404).json({ message: "Note not found" });
    }
    res
      .status(200)
      .send({
        message: `Note ${req.params.id} updated`,
        note: { title, content },
      });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteNote(req, res) {
  try {
    const noteDeleted = await Note.findByIdAndDelete(req.params.id);
    if (!noteDeleted) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).send({ message: `Note ${req.params.id} deleted` });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: error.message });
  }
}
