import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "imgUrl is required for creating an post"]
    },
    user: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user id is required for creating a post"]
    }
});

const postModel = mongoose.model('posts', postSchema);
export default postModel;