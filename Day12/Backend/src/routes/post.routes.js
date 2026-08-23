const express = require("express");
const postRouter = express.Router();
const multer = require("multer");
const identifyingUser=require("../middlewares/auth.middleware");
const postController=require("../controllers/post.controller")

const {
    CreatePostController,
    getPostController,
    getPostDetailsController
} = require("../controllers/post.controller");

const upload = multer({
    storage: multer.memoryStorage()
});

postRouter.post(
    "/createpost",
    upload.single("spiderman"),
    postController.CreatePostController
);

postRouter.get("/getposts",identifyingUser,postController.getPostController);
postRouter.get("/details/:postID",identifyingUser, postController.getPostDetailsController);
postRouter.get("/posts/like/:postID",identifyingUser, postController.likesPostController);
postRouter.get("/posts/unlike/:postID",identifyingUser,postController.unlikePostController)
/**
 * @route GET /api/post/feed
 * @description get all the post created in DB
 * @access private
 */

postRouter.get("/feed",identifyingUser,postController.getFeedController)
module.exports = postRouter;