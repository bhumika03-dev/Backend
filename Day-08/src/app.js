/**
 * server ko create krna
 */

const express = require("express")
const noteModel = require("./models/notes.model")


const app = express()

app.use(express.json())
/**
 * - POST /notes
 * - req.body => {title,description}
 */
app.post("/api/notes", async (req, res) => {
    const { title, description, age } = req.body

    const notes = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

/**
 * - GET /notes
 * - fetch all the notes Data
 */
app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})
// DELETE

app.delete("/api/notes/:id",async(req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete(id)
     res.status(200).json({
        message: "Notes deleted successfully"
    
    })
})
//PATCH
app.patch("/api/notes/:id",async(req,res)=>{
    const id=req.params.id
    const {description}=req.body
    await noteModel.findByIdAndUpdate(id,{description})
     res.status(200).json({
        message: "Notes Updated successfully"
    
    })
})


module.exports = app