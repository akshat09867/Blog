import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/style.css'
function CreatePost(){
  const navigate=useNavigate()
    const [data,setdata]=useState({
        "title":"",
        "excerpt":"",
        "content":"",
        "date":""
    })
    const onHandle=(e)=>{ setdata({...data,[e.target.name]:e.target.value})}
  const handleSubmit=async(e)=>{
    e.preventDefault();   
     try {
      await axios.post('/api/v1/post/Cpost',data,{headers:{"Content-Type":"application/json"}})
     navigate('/api/v1/users/home')
    
     } catch (error) {
      console.log(error);
     }
     setdata({
      "title":"",
        "excerpt":"",
        "content":"",
      "date":""
    })
   
  }

  const filled=data.title&&data.excerpt&&data.content
    return(
        <>
             <form onSubmit={handleSubmit} className='form'>
                <br /><br />
            <span className='rr'>Title:  </span>
            <input className='ttt'type='text'name='title'placeholder='Your title'onChange={onHandle} value={data.title}/><br /><br />
            <span className='rr'>Excerpt:  </span>
            <input className='ttt'type='text'placeholder='short description'name='excerpt'onChange={onHandle} value={data.excerpt}/><br /> <br />
            <span className='rr'>Content:  </span>
            <input className='ttt'type='text'placeholder='Your Content'name='content'onChange={onHandle} value={data.content}/><br /> <br />
            <span className='rr'>Date:  </span>
            <input type='date'placeholder='Enter Date'name='date'onChange={onHandle} value={data.date}/><br /> <br />
            <button className='g'type='submit' disabled={!filled}>Create Post</button>
        </form>
        <button className='g' onClick={()=>navigate('/api/v1/users/home')}>Home</button>
        </>
    )
}
export default CreatePost