import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
import User from '../models/User.model.js'
const Profile=async(req,res)=>{
   try {
     const user=await User.findById(req.user._id)
     
     if(!user) throw new apierr(404,"user not found")
         res
         .status(200)
         .json(new apires(200,"User Profile",user))
   } catch (error) {
    console.log(error);
    
   }
}
export {Profile}