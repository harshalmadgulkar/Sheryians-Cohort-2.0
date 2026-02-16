import express from 'express';
import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const isUserAlreadyExists = await userModel.findOne({ email });

        if (isUserAlreadyExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = crypto.createHash('md5').update(password).digest("hex");

        const user = await userModel.create({ email, name, password: hashedPassword });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

        res.cookie("jwt_token", token);

        res.status(201).json({
            message: "User registered.",
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message, data: { code: error.code, keyValue: error.keyValue } });
    }

});

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        res.status(404).json({
            message: 'User not found with this email address'
        });
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex");
    if (!isPasswordMatched) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("jwt_token", token);

    res.status(200).json({
        message: "User logged in",
        user,
        token
    });

});

export default authRouter;