import {Router} from 'express'
import {Post} from '../controllers/post.js'
import VerifyJwt from '../middleware/authentication.middleware.js' 
import {Profile} from '../controllers/profile.js'
import {Myposts,Delpost} from '../controllers/Mypost.js'
const postrouter=Router()
postrouter.route('/Cpost').post(VerifyJwt,Post)
postrouter.route('/profile').get(VerifyJwt,Profile)
postrouter.route('/').get(VerifyJwt,Myposts)
postrouter.route('/:_id').delete(VerifyJwt,Delpost)
export default postrouter;