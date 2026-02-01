import ImageKit from '@imagekit/nodejs';
// import 'dotenv/config';

// console.log(process.env.IMAGEKIT_PRIVATE_KEY);
const imagekit = new ImageKit({
    privateKey: "",
    // privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });
    return result;
}

export default uploadFile;