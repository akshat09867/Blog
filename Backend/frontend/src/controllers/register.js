import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Register() {
  const [data,setData] =useState({
    "Name":"",
    "username":"",
    "password":"",
    "ConfirmPassword":"",
    "Email":"",
    "phoneNumber":""
  })
  const [image,setimage]=useState(null)
  const navigate=useNavigate()
  const onHandle=(e)=>{ setData({...data,[e.target.name]:e.target.value})}
  const Handleimagechange=(e)=>{setimage(e.target.files[0])}   // Store the selected image file
  const handleSubmit=async(e)=>{
    e.preventDefault();  //prevent page reload
    if (data.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;  // Stop form submission
    } 
    const formData=new FormData()
    formData.append("Name", data.Name);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("ConfirmPassword", data.ConfirmPassword);
    formData.append("Email", data.Email);
    formData.append("phoneNumber", data.phoneNumber);
    if (image) formData.append("avatar", image); // Append image if it exists
     try {
      const response= await axios.post('/api/v1/users/register',formData,{headers:{"Content-Type":"multipart/form-data"}})
      navigate('/api/v1/users/login')
     setData(response.data)
     } catch (error) {
      console.log(error);
     }
     //reset the data after form submission
     setData({
      "Name":"",
      "username":"",
      "password":"",
      "ConfirmPassword":"",
      "Email":"",
      "phoneNumber":""
    })
    setimage(null)
  }
  const filled=data.username&&data.password&&data.Email&&data.phoneNumber&&data.Name
  const sub=()=>{
    navigate('/api/v1/users/login')
  }
  return (
    <div >
      <h1 style={{textAlign:"center"}}>Sign Up</h1>
      <button onClick={sub} style={{fontSize:"20px"}}type='submit'>Login</button>
     
      <br /><br />
     <form onSubmit={handleSubmit}>
     <div style={{color:"white",textAlign:"center",fontSize:"25px"}}>
     <span><b>Name: </b> </span>
     <input type='text'name='Name' placeholder='Name' value={data.Name}onChange={onHandle} /><br /><br />
        <span><b>Username:</b>  </span>
        <input type='text'name='username' placeholder='Your Username' value={data.username}onChange={onHandle} /><br /><br />
        <span> <b>Create a Password:</b>  </span>
        <input type='password' name='password'placeholder='Your password'value={data.password} onChange={onHandle}/><br /><br />
        <span> <b>Confirm Password:</b>  </span>
        <input type='password' name='ConfirmPassword'placeholder='confirm password'value={data.ConfirmPassword} onChange={onHandle}/><br /><br />
        <span><b>Email:</b>  </span>
        <input type='email'name='Email' placeholder='Your email' value={data.Email}onChange={onHandle}/><br /><br />
        <span><b>PhoneNumber:</b>  </span>
        <input type='tel'name='phoneNumber' placeholder='Your phoneNumber' value={data.phoneNumber} onChange={onHandle}/><br /><br />
        <span> <b>Profile Image:</b>  </span>
        <input type='file' name='image' onChange={Handleimagechange} /><br /><br /> {/* Image input */}
        <button type="submit" disabled={!filled}> <b>Register</b></button>
      </div>
     </form>
    </div>
  );
}

export default Register;
