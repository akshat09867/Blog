import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
import CreatePost from '../models/post.model.js'
import User from '../models/User.model.js'
const Myposts=async(req,res)=>{
   try {
     const post=await CreatePost.find({author:req.user._id}).populate("author","Name")
     console.log(post);
     if(!post) throw new apierr(404,"post not found")
         res
     .status(200)
     .json(new apires(200,"fetched successfully",post))
   } catch (error) {
    throw new apierr(402)
   }
}
const Delpost=async(req,res)=>{
 try {
   const postId=req.params._id
   if (!postId) {
    throw new apierr(404, "Post not found or you do not have permission to delete it");
}
   const post=await CreatePost.findOneAndDelete({_id:postId,author:req.user._id})
   res
   .status(200)
   .json(new apires(200,"Deleted successfully",post))
 } catch (error) {
  throw new apierr(400)
 }
}
export {Myposts,Delpost}