import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "instacloneDB"
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectToDB;