import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from 'morgan';

// import routes
import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));


app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);

export default app;