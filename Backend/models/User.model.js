import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const UserSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"password must be of 8 characters"]
    },
    Email:{
        type:String,
        required:true,
        lowercase:true
    },
    phoneNumber:{
        type:Number,
        unique:true,
        required:true
    },
   
    avatar:{
        type:String
    },
    refreshtoken:{
        type:String
    }
},{timestamps:true})

    UserSchema.pre("save",
        async function (next) {
        if(!this.isModified('password')) return next()
     this.password=await bcrypt.hash(this.password,10)
     next()}
    )
    UserSchema.methods.passcorrect=async function(password){
      try {    return await bcrypt.compare(password,this.password)
      } catch (error) {
         console.log("write correct pass",error);
        return false;
      }
    } 
UserSchema.methods.genAccess=function(){
   return jwt.sign({
        _id:this._id,
        username:this.username,
        password:this.password,
        Email:this.Email,
        phoneNumber:this.phoneNumber
    },process.env.AccessSecret,{expiresIn:process.env.AccessE})
}
UserSchema.methods.genRefresh=function(){
  return jwt.sign({_id:this._id}, process.env.RefreshSecret,{expiresIn:process.env.RefreshE}) 
}

const User= mongoose.model("User",UserSchema)
export default User