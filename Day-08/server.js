
require("dotenv").config()

const app=require("./src/app")
app.listen(3000,()=>{
    console.log("Server is running in the port 3000")
})

const connectToDb=require("./src/config/database")
connectToDb()
console.log(process.env.MONGO_URL);