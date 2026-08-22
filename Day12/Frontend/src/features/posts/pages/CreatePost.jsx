import React,{useState,useRef} from 'react'
import "../style/createpost.scss"
const CreatePost = () => {
    const [caption,setcaption]=useState("")
    const postImageinputFieldRef=useRef(null)
  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
            <form>
                <label className="post-image-label" htmlFor="postImage">Select Image </label>
                <input  hidden type="file" name="postImage" id="postImage" />
                <input type="text" name="caption" id="caption" placeholder='Enter caption' />
                 <button className='button primary'>Create Post</button>

            </form>
        </div>
    </main>
  )
}

export default CreatePost
