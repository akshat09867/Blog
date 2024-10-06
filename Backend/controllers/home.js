import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
import CreatePost from '../models/post.model.js'
const Home=async(req,res)=>{
  try {
      const Post=await CreatePost.find().populate('author','Name')  // Fetch posts and populate author details (like name)   
      res
      .status(200)
      .json(new apires(200,"Fetched Post",Post))
  } catch (error) {
    throw new apierr(401)
  }
}
export {Home}