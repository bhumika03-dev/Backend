const mongoose=require("mongoose");

const followSchema= new mongoose.Schema(
    {
        follower:{
            type:String,
            ref:"users",
            required:[true,"Follower is required"]   
        },
        following:{
            type:String,
            ref:"users",
            required:[true,"Following is required"] 
        }
    },
    {
     timestamps:true   
    }
)

const followModel=mongoose.model("follows",followSchema)
module.exports=followModel
