const userModel=require("../models/user.model");
const crypto=require("crypto");
const jwt=require("jsonwebtoken");


async function registerController(req,res){


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

}

async function loginController(req,res){
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
  if(!user){
    return res.status(404).json({message:"User not found"})
  }
  
  const hashedPd=crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValid=hashedPd==user.password

  if(!isPasswordValid)
{
    return res.status(401).json({message:"password invalid"})

}

   const token=jwt.sign(
    {
        id:user._id
    },process.env.JWT_SECRET,
    {
        expiresIn:"3d"
    }
   )

   res.cookie("token",token);

   res.status(200).json({
    message:"User logged in successfully",
    user:{
        username:user.username,
        email:user.email,
        bio:user.bio,
        profile_image:user.profile_image
    }
   })

}

module.exports={
    registerController,
    loginController
}