import express from "express";
import { createPostController, getPostController, getPostDetailsController } from "../controllers/post.controller.js";
import multer from "multer";
import { identifyUser } from "../middlewares/auth.middleware.js";

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", identifyUser, upload.single('image'), createPostController);
postRouter.get("/", identifyUser, getPostController);
// /api/posts/details/:postId
postRouter.get("/details/:postId", identifyUser, getPostDetailsController);


export default postRouter;