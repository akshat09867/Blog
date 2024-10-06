import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
import User from '../models/User.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
 const generateAccessRefresh=async(_id)=>{
    try {
        const user=await User.findById(_id)
        const accesst=user.genAccess()
        const refresht= user.genRefresh()
        user.refreshtoken=refresht
       await user.save({validateBeforeSave:false})
        return {accesst,refresht}
    } catch (error) {
        throw new apierr(400,"can't generate accesst or refresht")
    }
}

const registration=async (req,res)=>{
    const {Name,username,password,ConfirmPassword,Email,phoneNumber}=req.body
    let avatarlp;
    if(req.files && Array.isArray(req.files.avatar) &&req.files.avatar.length>0){
        avatarlp=req.files?.avatar[0].path
    }
    const avatar=await uploadOnCloudinary(avatarlp)
    if(!(Name&&username&&password&&ConfirmPassword&&Email&&phoneNumber)) 
        throw new apierr(400,"all fields are required")
     if(username.trim()===""){
        throw new apierr(400,"username is required")
      }
    if(password.trim()===""){
        throw new apierr(400,"password is required")
     }
     if(password!==ConfirmPassword) throw new apierr(400,"password doesn't matched")
    if(Email.trim()===""){
        throw new apierr(400,"Email is required")
     }
     if(Name.trim()===""){
      throw new apierr(400,"Name is required")
   }
     const trimmedPhoneNumber = phoneNumber.trim();
        if (trimmedPhoneNumber === ""|| trimmedPhoneNumber.length !== 10 ) {
            throw new apierr(400, "phonenumber is required");
        }
        const existingUser=await User.findOne({Email:Email.trim()})
        if(existingUser) throw new apierr(400,"Email already in use")
        const user=await User.create({
   Name,username,password,Email,phoneNumber:trimmedPhoneNumber,avatar:avatar? avatar.url:null
        })
        res.status(200).json(
             new apires(200,"registered successfully",user)
        );
}

const Login=async(req,res)=>{
    const {Email,password}=req.body
    if(!(Email && password)){throw new apierr(402,"All fields are required")}
    const user=await User.findOne({Email})   
    if(!user) throw new apierr(404,"user not found")
   const checkpass=await  user.passcorrect(password)
if(!checkpass) throw new apierr(400,"password is incorrect")
    const {accesst,refresht}= await generateAccessRefresh(user._id)
if(!accesst) throw new apierr(401,"not generated")
const loginuser= await User.findById(user._id).select("-password -refreshtoken")
    const options = {
        httpOnly: true,
        secure: true
    }
res
.status(200)
.cookie("accesst",accesst,options)
.cookie("refresht",refresht,options)
.json(new apires(200,"logged in successfully", {user:loginuser,accesst,refresht}))
}
const Logout=async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.user._id,{$unset:{refreshtoken:1}})  
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
    res
    .status(200)
    .clearCookie("accesst",options)
    .clearCookie("refresht",options)
    .json(new apires(200,"user Logout successfully",user))
}

export {registration,Login,Logout}









































































