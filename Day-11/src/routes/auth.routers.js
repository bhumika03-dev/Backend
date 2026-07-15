const express=require("express");
const crypto=require("crypto");
const jwt=require("jsonwebtoken");
const authRouter=express.Router();
const userModel=require("../models/user.model");

authRouter.post("/register", async (req,res)=>{

const {username,email,password,bio,profile_image}=req.body;

// const isUserExistsByEmail = await userModel.findOne({email})

// if(isUserExistsByEmail){
//     return res.status(409).json({message:"User with this email already exists"})
// }

// const isUserExistsByUsername = await userModel.findOne({username})

// if(isUserExistsByUsername){
//     return res.status(409).json({message:"User with this username already exists"})
// }

const isUserAlreadyExists= await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
})
 if(isUserAlreadyExists){
    return res.status(409).json(
        {message:"User with this username or email already exists"+ isUserAlreadyExists.email==email?"Email already exists":"Username already exists"})
 }

 const hashedPd=crypto.createHash("sha256").update(password).digest("hex");

 const user = await userModel.create({
     username,
     email,
     password:hashedPd,
     bio,
     profile_image
 })

 const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"3d"})

 res.cookie("token",token);

 res.status(201).json({
    message: "User registered successfully",
    user:{
        _id:user._id,
        username:user.username,
        email:user.email,
        bio:user.bio,
        profile_image:user.profile_image
    }
 })


})

authRouter.post("/login", async (req,res)=>{
 const {username,email,password}=req.body;

 const user=await userModel.findOne({
     $or:[
       {
        username:username
       },
       {
        email:email
       }

     ]
 })



})

module.exports=authRouter;