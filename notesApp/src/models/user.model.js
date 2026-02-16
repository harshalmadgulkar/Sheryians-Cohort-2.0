import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "This email user already exists !"],
        lowercase: true
    },
    name: String,
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('users', userSchema);
export default userModel;