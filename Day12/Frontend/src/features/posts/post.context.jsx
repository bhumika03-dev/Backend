import { createContext,useState,useEffect } from "react";
import { getFeed } from "./services/post.api";


export const PostContext=createContext()

export const PostContextProvider=({children})=>{
    const [loading,setLoading]=useState(false);
    const [post,setPost]=useState(null);
    const [feed,setFeed]=useState(null);

    return(
        <PostContext.Provider value={{loading,setLoading,post,setPost,feed,setFeed}}>
        {children}
        </PostContext.Provider>
    )
}

