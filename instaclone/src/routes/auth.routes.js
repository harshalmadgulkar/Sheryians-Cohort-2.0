import express from "express";
import { loginController, registerController, getMeController } from "../controllers/auth.controller.js";
import { identifyUser } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post('/register', registerController);

authRouter.post('/login', loginController);

authRouter.get('/get-me', identifyUser, getMeController);

export default authRouter;