const express=require("express");
const crypto=require("crypto");
const jwt=require("jsonwebtoken");
const authRouter=express.Router();
const userModel=require("../models/user.model");
const authController=require("../controllers/auth.controller");
const identifyingUser=require("../middlewares/auth.middleware");


authRouter.post("/register",authController.registerController)

authRouter.post("/login", authController.loginController)

authRouter.post("/get-me", identifyingUser, authController.getMeController)





module.exports=authRouter;