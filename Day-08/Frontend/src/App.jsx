import { useState } from 'react'
import axios from "axios"
import './index.css'

function App() {
  
const [note, setNote] = useState([
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
])
  return (
    <>
      <div className="notes">
        {
          note.map(note=>{
 return <div className="note">
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </div>

          })
        }
        
      </div>
    </>
  )
}

export default App
