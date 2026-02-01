import express from 'express';
import multer from 'multer';
import postModel from './models/post.model.js';
import uploadFile from './services/storage.service.js';

const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// use multer to uplload file
app.post('/posts/create', upload.single("image"), async (req, res) => {
    const { caption } = req.body;

    const result = await uploadFile(req.file.buffer);
    
    const post = await postModel.create({ image: result.url, caption });

    res.status(201).json({
        message: 'post created successfully',
        post
    });
});

app.get('/posts', (req, res) => {

});

export default app;