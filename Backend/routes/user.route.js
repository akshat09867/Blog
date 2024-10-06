import {Login,Logout,registration} from "../controllers/users.js"
import VerifyJwt from '../middleware/authentication.middleware.js' 
import {Home} from '../controllers/home.js'
import {Router} from 'express'
import { upload } from "../middleware/multer.middleware.js"
const userrouter=Router()
userrouter.route('/register').post(
    upload.fields([
      {
        name:"avatar",
        maxCount:1
      }
    ])
    ,registration)
userrouter.route('/login').post(Login)
userrouter.route('/logout').get(VerifyJwt,Logout)
userrouter.route('/home').get(VerifyJwt,Home)
export default userrouter;