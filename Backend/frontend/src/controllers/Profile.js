import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../css/pro.css'
import '../css/style.css'
function Profile(){
    const navigate=useNavigate()
    const [data,setdata]=useState({})
    useEffect(()=>{
        const onHandle=async()=>{
            try {
                const response= await axios.get('/api/v1/post/profile')
                setdata(response.data.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        onHandle()
    },[])
    
    return(
        <div className='profile'>
              {data.avatar && (
        <img
          src={data.avatar}
          alt={`${data.username}'s avatar`}
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      )}
        <h1>Name:  {data.Name}</h1>
        <h3>Username: {data.username}</h3>
        <h3>PhoneNumber: {data.phoneNumber}</h3>
      
        <button id="jj"onClick={()=>navigate('/api/v1/post/')}>My Posts</button>      <br />      <br />
        <button className='g' onClick={()=>navigate('/api/v1/users/home')}>Home</button>
    
        </div>
        
    )
}
export default Profile