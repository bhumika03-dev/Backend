const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username already exists "],

    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email already exists "],
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    bio:{
        type:String,
        maxlength: [200, "Bio cannot exceed 200 characters"],
    },
    profile_image:{
        type:String,
        default:"https://ik.imagekit.io/ul9xybceg/Default-Profile-Picture-PNG-Free-Download.png",
    },
})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;