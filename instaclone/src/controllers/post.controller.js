import ImageKit, { toFile } from "@imagekit/nodejs";
import jwt from "jsonwebtoken";
import postModel from "../model/post.model.js";

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const createPostController = async (req, res) => {
    const token = req.cookies.instatoken;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided. Unauthorized access"
        });
    }

    let decoded = null;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            message: "User Not Authorized"
        });
    }

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "instaclone-posts"
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    });

    res.status(201).json({
        message: "Post Created Successfully",
        post
    });
};

export const getPostController = async (req, res) => {
    const token = req.cookies.instatoken;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided. Unauthorized access"
        });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            message: "User Not Authorized"
        });
    }

    const userPosts = await postModel
        .find({ user: decoded.id })
        .lean();

    res.status(200).json({
        message: "Posts Fetched Successfully",
        userPosts
    });
};