const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = ImageKit;
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function CreatePostController(req, res) {
    try {

        // Check image
        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        console.log({
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            buffer: !!req.file.buffer
        });

        // Check token
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized. Token not provided"
            });
        }

        // Verify token
        let decoded=null;
        try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        }
        catch (err){
            return res.status(401).json({
                message:"User not authorized"
            })
        }


        // Upload image to ImageKit
        let uploadedFile;

        try {

            uploadedFile = await imageKit.files.upload({
                file: await toFile(req.file.buffer, req.file.originalname),
                fileName: req.file.originalname
            });

        } catch (err) {

            console.log("Primary upload failed. Trying Base64 upload...");

            const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

            uploadedFile = await imageKit.upload({
                file: base64,
                fileName: req.file.originalname
            });
        }

        // Save post in MongoDB
        const post = await postModel.create({
            caption: req.body.caption,
            imgUrl: uploadedFile.url,
            user: decoded.id
        });

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            post
        });

    } catch (err) {

        console.error("Error:", err);

        return res.status(500).json({
            success: false,
            message: "Upload failed",
            error: err.message
        });
    }
}

module.exports = CreatePostController;