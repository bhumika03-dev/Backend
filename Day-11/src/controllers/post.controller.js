const postModel=require("../models/post.model")
const ImageKit = require("@imagekit/nodejs");
const { toFile } = ImageKit;



const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function CreatePostController(req,res){
    try {

        if(!req.file){
            return res.status(400).json({
                message:"Image is required"
            });
        }
        console.log({
    originalname: req.file?.originalname,
    mimetype: req.file?.mimetype,
    size: req.file?.size,
    buffer: !!req.file?.buffer
});
        // Try upload using ImageKit's toFile helper first, fall back to base64 data URI on 500 errors
        let file;
        try {
            file = await imageKit.files.upload({
                file: await toFile(req.file.buffer, req.file.originalname),
                fileName: req.file.originalname,
            });
        } catch (e) {
            console.warn("Primary ImageKit upload failed, attempting base64 fallback", e?.status || e?.message);
            const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
            file = await imageKit.files.upload({
                file: base64,
                fileName: req.file.originalname,
            });
        }

        res.status(201).json({
            message:"Image uploaded successfully",
            url:file.url,
            fileId:file.fileId
        });

    } catch (err) {
        console.error("ImageKit upload error:", err);
        // log non-enumerable properties as well for SDK errors
        try {
            console.error("Error details:", JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        } catch (e) {
            console.error("Could not stringify error details", e);
        }

        const details = {
            message: err.message,
            status: err.status,
            headers: err.headers,
            error: err.error,
        };

        res.status(500).json({
            message: "Upload failed",
            error: details,
        });
    }
}

module.exports={
    CreatePostController
}