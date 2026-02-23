import express from "express";
import { createPostController, getPostController } from "../controllers/post.controller.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", upload.single('image'), createPostController);
postRouter.get("/", getPostController);


export default postRouter;