
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
    const { email, username, password, bio, profileImage } = req.body;

    const missingFields = [];

    if (!email) missingFields.push("email");
    if (!username) missingFields.push("username");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Missing required field(s): ${missingFields.join(", ")}`
        });
    }

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

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        bio,
        profileImage
    });

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.cookie("instatoken", token);

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    });
};

export const loginController = async (req, res) => {
    const { email, username, password } = req.body;

    const missingFields = [];

    if (!password) missingFields.push("password");
    if (!email && !username) missingFields.push("email or username");

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Missing required field(s): ${missingFields.join(", ")}`
        });
    }

    const user = await userModel.findOne({
        $or: [{ username }, { email }]
    }).select("+password");


    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password invalid"
        });
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.cookie("instatoken", token);
    res.status(200).json({
        message: "User LoggedIn Successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        }
    });
};

export const getMeController = async (req, res) => {
    const userId = req.user.id;
    const user = await userModel.findById(userId);
    res.status(200).json({
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        }
    });
};