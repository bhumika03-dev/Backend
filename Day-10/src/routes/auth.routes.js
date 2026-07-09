const express=require("express")
const UserModel=require("../model/user.model")
const authRouter=express.Router()

authRouter.post("/register",async(req,res)=>{
    const {name,email,password} =req.body
    
    const isUserExits=await UserModel.findOne({email})
    if(isUserExits){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const user= await UserModel.create({name,email,password})


    res.status(200).json({
        message:"User registered suceesfully",
        user
    })
})



module.exports=authRouter

