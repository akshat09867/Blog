import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../css/style.css'
function Mypost(){
    const navigate=useNavigate()

    const [post,setpost]=useState([])
    useEffect(()=>{
        const onHandle=async()=>{
            try {
                const response=await axios.get('/api/v1/post/')
                setpost(response.data.data)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        onHandle()
    },[])
        const handleDelete = async (postId) => {
          try {
              const response = await axios.delete(`/api/v1/post/${postId}`, {
                  headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`, // If using JWT
                  },
              });
  
              // Check if the response was successful
              if (response.status === 200) {
                  setpost(post.filter((p) => p._id !== postId)); // Update the post state
                  alert(response.data.message); // Optionally alert the user
              } else {
                  throw new Error('Failed to delete the post');
              }
          } catch (error) {
              console.error(error);
              alert(error.message); // Handle the error
          }}
    return (
        <>
        <div >
            { post &&Array.isArray(post) &&post.length>0?(
                post.map((data)=>(
                    <div className='tt' key={data._id}>
      <div className="image-container">
        <img src="https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg"alt='img' className="image" />
        <div className="content">
          <h1>Title: {data.title}</h1>
          <h3>Excerpt: {data.excerpt}</h3>
          <p className="content-text">Content: {data.content}</p>
          <h3>By Author: {data.author.Name} on {new Date(data.date).toLocaleDateString()}</h3>
          <button onClick={()=>handleDelete(data._id)}className="content-text">Delete This Post</button>
        </div>
      </div>
    </div>
                ))
       )
    :(<h1>No Post Available</h1>)}
        </div>
      <br />      <br />
<button className='g' onClick={()=>navigate('/api/v1/users/home')}>Home</button>
        </>
    )
   
}
export {Mypost}