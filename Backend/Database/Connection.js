import mongoose from "mongoose"
 
const Connection= async()=>{
    try {
        const Conn= await mongoose.connect(`${process.env.connString}`)
        console.log("connected!!!");
        
    } catch (error) {
        console.log(error);
        
    }
} 
export default Connection;





