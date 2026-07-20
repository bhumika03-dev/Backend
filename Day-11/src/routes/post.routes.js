const express=require("express")
const postRouter=express.Router()
const PostController=require("../controllers/post.controller")
const multer=require("multer")
const upload=multer({storage:multer.memoryStorage()})


postRouter.post("/createpost",upload.single("spiderman"),PostController.CreatePostController)

module.exports=postRouter