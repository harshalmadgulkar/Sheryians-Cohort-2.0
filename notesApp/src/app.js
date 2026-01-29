import express from 'express';

const app = express();

app.use(express.json());

const notes = [];

app.get('/', (req, res) => {
    res.send("NotesApp Server");
});

app.get('/notes/read', (req, res) => {
    res.status(200).json({ notes: notes });
});

app.post('/notes/create', (req, res) => {
    let note = req.body;
    console.log(note);
    notes.push(note);
    res.status(201).json({ message: "note created successfully." });
});

app.patch('/notes/update/:index', (req, res) => {
    let { index } = req.params;
    let { description } = req.body;
    notes[index].description = description;
    res.status(200).json({ message: "note updated successfully." });
});

app.delete('/notes/delete/:index', (req, res) => {
    const { index } = req.params;
    delete notes[index];
    res.status(200).json({ message: "note deleted succesfully" });
});

export default app;