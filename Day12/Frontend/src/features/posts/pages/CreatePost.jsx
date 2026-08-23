import React,{useState,useRef} from 'react'
import "../style/createpost.scss"
import {usePost} from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [caption,setcaption]=useState("")
    const postImageinputFieldRef=useRef(null)
    const {loading,handleCreatePost}=usePost()
    const navigate=useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        const file=postImageinputFieldRef.current.files[0]
         
       await handleCreatePost(file,caption)
       navigate("/")
    }

    if(loading){
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }
  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label className="post-image-label" htmlFor="postImage">Select Image </label>
                <input  ref={postImageinputFieldRef} hidden type="file" name="postImage" id="postImage" />
                <input type="text" name="caption" value={caption} onChange={(e)=>{setcaption(e.target.value)}} id="caption" placeholder='Enter caption' />
                 <button className='button primary'>Create Post</button>

            </form>
        </div>
    </main>
  )
}

export default CreatePost
