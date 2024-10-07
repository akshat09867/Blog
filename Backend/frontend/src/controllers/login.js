import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 function Login(){
    const navigate=useNavigate()
    const [info,setInfo]=useState({
        "Email":"",
        "password":""
    })
    const onHandle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})  //(...) This is the spread operator, which copies all the existing properties of the info state into a new object. This ensures that the state is updated immutably (i.e., creating a new object rather than modifying the existing one).
    //[e.target.name]: e.target.value: This part adds or updates a property in the object. The e.target.name becomes the key, and e.target.value becomes the corresponding value.
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        setInfo({
            "Email":"",
            "password":""
          })
      try {
          const response=
              await axios.post('/api/v1/users/login',info)
              navigate("/api/v1/users/home")
          setInfo(response.data)
          
      }
       catch (error) {
        console.log(error);
        
      }}
      const filled=info.Email&&info.password
    return(
        <>
        <h1 style={{textAlign:"center"}}>LOGIN</h1>
        <form onSubmit={onSubmit} style={{textAlign:"center",color:"wheat",margin:"30px",padding:"30px",fontSize:"30px"}}>
            <span><b>Email: </b></span>
            <input type='Email'name='Email'placeholder='Your Email'onChange={onHandle} value={info.Email}/><br /><br />
            <span><b>Password:  </b>  </span>
            <input type='password'name='password'placeholder='Your password'onChange={onHandle} value={info.password}/><br /> <br />
            <button type='submit' disabled={!filled}>LOGIN</button>
        </form>
        <button style={{fontSize:"20px"}}onClick={()=>navigate('/api/v1/users/register')}>Register</button>
        </>
    )
}
export default Login