import ImageKit, { toFile } from "@imagekit/nodejs";

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const createPostController = async (req, res) => {

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    });

    res.send(file);
};
