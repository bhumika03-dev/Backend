const express=require('express')

const app=express()
const notes = [];
app.post("/notes",(req,res)=>{
    console.log(res.body)
    res.send("Successfully notes created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully")

})

module.exports=app