import {useEffect} from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../components/Nav'


const Feed=()=>{
  const {feed,handleGetFeed,loading,handleLike,handleUnLike} = usePost()

   useEffect(()=>{
     handleGetFeed()
   },[])

   if(loading || !feed){
    return(<main><h1>Feed is loading...</h1></main>)
    
   }
   console.log(feed)
    return(
       <main className='feedpage'>
        <Nav/>
        <div className='feed'>
          <div className="posts">
            {feed.map((post)=>{
              return <Post key={post._id} user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnlike={handleUnLike}/>
            })}
          </div>
        </div>
       </main>
    )
}

export default Feed