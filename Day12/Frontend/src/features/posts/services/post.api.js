import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})


export async function getFeed(){
    try{
        const response= await api.get("/api/post/feed");
        return response.data
    }
    catch (err){
        console.log("Error",err);
        throw err;
    }
    }

export async function createPost(imageFile,caption){
    const formData=new FormData()
    formData.append("spiderman",imageFile)
    formData.append('caption',caption)

    const response=await api.post("/api/post/createpost",formData)

    return response.data
}

export async function likePost(postID){
    const response = await api.get("/api/post/posts/like/" + postID)
    return response.data
}

export async function unLikePost(postID){
    const response= await api.get("/api/post/posts/unlike/" + postID)
    return response.data
}

