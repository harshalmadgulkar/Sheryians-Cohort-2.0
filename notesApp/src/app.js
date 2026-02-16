import express from 'express';
import notesRouter from './routes/notes.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send("NotesApp Server");
});

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

export default app;