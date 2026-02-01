import { configDotenv } from 'dotenv';
import connectDB from './src/config/database.js';
import app from './src/app.js';

configDotenv();

connectDB();

app.listen(3000, () => {
    console.log("Server is listening on port:3000");
});