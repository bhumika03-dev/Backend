const express = require('express');

const userRouter=express.Router();

const userController=require("../controllers/user.controller")
const identifyingUser=require("../middlewares/auth.middleware")


userRouter.post("/follow/:username",identifyingUser,userController.followUserController)
userRouter.post("/unfollow/:username",identifyingUser,userController.unfollowUserController)




module.exports=userRouter;