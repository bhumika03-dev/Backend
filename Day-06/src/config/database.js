const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://bhumika:OfoEC5suiCl6Fskq@cluster0.orfpyii.mongodb.net/Day-06").then(()=>{
        console.log("Connected to DB")
    })
}

module.exports=connectToDb
