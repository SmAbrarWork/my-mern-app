import express from "express";
import { getAllNotes } from "../controllers/nodeControllers.js";
import { getNotesById } from "../controllers/nodeControllers.js";
import { createNote } from "../controllers/nodeControllers.js";
import { updateNote } from "../controllers/nodeControllers.js";
import { deleteNote } from "../controllers/nodeControllers.js";


//routes or endpoints are the api paths that the client can hit to perform specific actions

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNotesById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
