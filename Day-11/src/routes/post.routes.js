const express=require("express")
const postRouter=express.Router()
const CreatePostController=require("../controllers/post.controller")
const multer=require("multer")
const upload=multer({storage:multer.memoryStorage()})


postRouter.post("/createpost",upload.single("spiderman"),CreatePostController)

module.exports=postRouter