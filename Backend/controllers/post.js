import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
import CreatePost from '../models/post.model.js'
import User from '../models/User.model.js'
const Post=async(req,res)=>{
try {
        const {title,excerpt,date,content}=req.body
        const author=req.user._id
        if(!(title&&date&&excerpt&&content)) throw new apierr(400,"All fields required")
        if(title.trim()==="") throw new apierr(400,"Title is required")
        if(excerpt.trim()==="") throw new apierr(400,"excerpt is required")
        if(date.trim()==="") throw new apierr(400,"date is required")
            if(content.trim()==="") throw new apierr(400,"content is required")
            const Postuser=await CreatePost.create({
        title,author,content,excerpt,date
        })
        if(!Postuser) throw new apierr(404,"Post not created")
          
            
    res
    .status(200)
    .json(new apires(200,"Post Created",Postuser))
    }
 catch (error) {
    res.status(500).json(new apierr(500,"something wrong",error.message))
}}
export {Post}