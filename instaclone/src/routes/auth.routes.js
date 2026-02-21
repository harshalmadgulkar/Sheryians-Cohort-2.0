import express from "express";
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    const { email, username, password, bio, profileImage } = req.body;

    const alreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email },
        ]
    });

    if (alreadyExists) {
        return res.status(409).json({
            message: "User already exists " + (alreadyExists?.email === email && alreadyExists?.username === username ? "by username & email" : alreadyExists?.email === email ? "by email" : alreadyExists?.username === username ? "by username" : null)
        });
    }

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        bio,
        profileImage
    });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.cookie("instatoken", token);

    res.status(201).json({
        message: "User created successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });

});

export default authRouter;