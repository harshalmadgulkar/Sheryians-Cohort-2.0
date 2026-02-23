import ImageKit, { toFile } from "@imagekit/nodejs";
import postModel from "../model/post.model.js";

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const createPostController = async (req, res) => {
    const userId = req.user.id;

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "instaclone-posts"
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: userId
    });

    res.status(201).json({
        message: "Post Created Successfully",
        post
    });
};

export const getPostController = async (req, res) => {
    const userId = req.user.id;
    const userPosts = await postModel
        .find({ user: userId })
        .lean();

    res.status(200).json({
        message: "Posts Fetched Successfully",
        userPosts
    });
};

export const getPostDetailsController = async (req, res) => {
    const userId = req.user.id;
    const postId = req.params.postId;

    const post = await postModel.findOne({ user: userId, _id: postId }).lean();

    if (!post) {
        return res.status(400).json({
            message: "Post Not Found"
        });
    }

    res.status(200).json({
        message: "Post Fetched Succesfully",
        post
    });
};