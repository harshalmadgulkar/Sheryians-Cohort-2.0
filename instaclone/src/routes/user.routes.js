import express from "express";
import { followUserController, unfollowUserController } from "../controllers/user.controller.js";
import { identifyUser } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userId
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser, followUserController);

/**
 * @route POST /api/users/unfollow/:userId
 * @description Unollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser, unfollowUserController);

export default userRouter;