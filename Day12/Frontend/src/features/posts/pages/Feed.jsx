import React from 'react'
import '../style/feed.scss'
import '../components/Post'
const Feed=()=>{
    return(
       <main className='feedpage'>
        <div className='feed'>
          <div className="posts">
            <Post/>
          </div>
        </div>
       </main>
    )
}

export default Feed