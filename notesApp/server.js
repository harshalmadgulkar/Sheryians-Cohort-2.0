import express from 'express';

const app = express();

app.use(express.json());

const notes = [];

app.get('/', (req, res) => {
    res.send("NotesApp Server");
});

app.get('/notes/read', (req, res) => {
    res.send(notes);
});

app.post('/notes/create', (req, res) => {
    let note = req.body;
    console.log(note);
    notes.push(note);
    res.send("note created.");
});

app.patch('/notes/update/:index', (req, res) => {
    let { index } = req.params;
    let { description } = req.body;
    notes[index].description = description;
    res.send("note is successfully updated.");
});

app.delete('/notes/delete/:index', (req, res) => {
    const { index } = req.params;
    delete notes[index];
    res.send("note delete succesfully");
});

app.listen(3000, () => {
    console.log("NotesApp running on port:3000");
});