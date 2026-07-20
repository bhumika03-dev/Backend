require("dotenv").config();
const app= require("./src/app.js")
const connectToDB=require("./src/config/database.js")

console.log({
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY?.slice(0,15),
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
});


connectToDB();

app.listen(3000,(req,res)=>{
    console.log("Server is running in the port 3000")
})

