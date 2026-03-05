import express from "express";
import { createPostController, getPostController, getPostDetailsController, likePostController, getFeedController } from "../controllers/post.controller.js";
import multer from "multer";
import { identifyUser } from "../middlewares/auth.middleware.js";

const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", identifyUser, upload.single('image'), createPostController);
postRouter.get("/", identifyUser, getPostController);
// /api/posts/details/:postId
postRouter.get("/details/:postId", identifyUser, getPostDetailsController);

/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the request params
 */
postRouter.post("/like/:postId", identifyUser, likePostController);

/**
 * @route GET /api/posts/feed
 * @description get all the post created in the DB
 * @access private
 */
postRouter.get("/feed", identifyUser, getFeedController);

export default postRouter;