import React, { useEffect, useState } from'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../css/style.css"
function Home(){
  const navigate=useNavigate()
  const [post,setpost]=useState([])
  const onSubmit=async(req,res)=>{
    try {
      await axios.get("/api/v1/users/logout")
      navigate("/api/v1/users/login")
    } catch (error) {
     console.log(error);
    }
 }
  useEffect(()=>{
    const fetchPosts=async()=>{
try {
        const response=await axios.get('/api/v1/users/home')
    setpost(response.data.data)
} catch (error) {
  console.log(error);
  
}    }
fetchPosts()
  },[])
  const navi=()=>{
    navigate('/api/v1/post/Cpost')
  }
    return(
<div className="background-image">
<nav>
  <div id='ga'>
    <span className='gap'id='aa' onClick={()=>navigate('/api/v1/users/home')}>Home</span>
    <span className='gap' onClick={navi}>Create Post</span>
    <span className='gap' onClick={()=>navigate('/api/v1/post/')}>My Posts</span>
    <span className='gap'onClick={()=>navigate('/api/v1/post/profile')} >Profile</span>
    <span className='gap' onClick={onSubmit}>Logout</span>
  </div>
</nav>
<h1 style={{textAlign:"center"}}>BLOGS</h1>
<div id='bh'>
  {post && Array.isArray(post) && post.length>0?(
    post.map((i)=>(
      <div key={i._id} className='post-box'>
        <h2>Title: {i.title}</h2>
        <h3>Excerpt: {i.excerpt}</h3>
        <p ><b>Content: {i.content}</b></p>
      <h3>By {i.author?.Name} on {new Date(i.date).toLocaleDateString()}</h3>
      </div>
    ))):(<h1>No post Available</h1>)
  }
</div>
</div>)
}
export default Home