import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Logout(){
    const navigate=useNavigate()
    const onSubmit=async(req,res)=>{
       try {
         await axios.get("/api/v1/users/logout")
         navigate("/api/v1/users/login")
       } catch (error) {
        console.log(error);
       }
    }
    return(
        <>
        <button onClick={onSubmit}>Logout</button>
        </>
    )
}
export default Logout;