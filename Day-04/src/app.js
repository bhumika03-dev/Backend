const express=require('express')

const app=express()
app.use(express.json())

const notes=[]
app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})
// This POST API is used to create a new note. When a client sends a POST request to the /notes endpoint, Express receives the request. The data sent by the client is available in req.body. That data is added to the notes array using push(), which temporarily stores the note in memory. The updated array is logged to verify the insertion, and finally the server sends a response using res.send("note created") to inform the client that the note has been created successfully.
app.get("/notes",(req,res)=>{
    res.send(notes)
})
//"This GET API is responsible for fetching all the notes from the notes array and returning them to the client as a JSON response using res.send(). It does not create or update data; it only retrieves existing data."
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index]=req.body.title
    res.send("Note updated successfully")
})
app.delete("/notes/:index", (req, res) => {
    delete notes[ req.params.index ]
    res.send("note deleted successfully")
})
//This is a DELETE API used to remove a specific note from the notes array. The endpoint accepts an index as a route parameter. When a client sends a DELETE request to /notes/:index, Express extracts the index value from req.params.index. The delete operator is then used to remove the element at that index in the array. Finally, the server sends a confirmation message back to the client stating that the note has been deleted successfully.

module.exports=app