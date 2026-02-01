import express from 'express';
import noteModel from '../models/notes.model.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("NotesApp Server");
});

app.get('/notes/read', async (req, res) => {
    // find all notes from db
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched succesfully",
        notes
    });
});

app.post('/notes/create', async (req, res) => {
    // destructure title and description
    let { title, description } = req.body;
    // create note on db which is asynchrnous so async await used
    const note = await noteModel.create({ title, description });
    // response after note created
    res.status(201).json({
        message: "note created successfully.",
        note
    });
});

// update note
app.patch('/notes/update/:id', async (req, res) => {
    let { id } = req.params;
    let { description } = req.body;
    await noteModel.findOneAndUpdate({ _id: id }, { description });
    res.status(200).json({ message: "note updated successfully." });
});

// delete single note
app.delete('/notes/delete/:id', async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findOneAndDelete({ _id: id });

    res.status(200).json({
        message: "note deleted succesfully",
        note
    });
});

export default app;