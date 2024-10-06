import mongoose,{Schema} from 'mongoose'
const CreatepostSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    excerpt:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    content:{
        type:String,
        required:true
    }
    
},{timestamps:true})
const CreatePost=mongoose.model("CreatePost",CreatepostSchema)
export default CreatePost