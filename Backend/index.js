import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import  Connectio from './Database/Connection.js'
import userrouter from './routes/user.route.js'
import postrouter from './routes/post.route.js'
import path from 'path'
import { fileURLToPath } from 'url'
const app= express()
const _filename=fileURLToPath(import.meta.url)
const _dirname=path.dirname(_filename)
app.use(express.static(path.join(_dirname,'/client/build')))

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
dotenv.config(
  {  path:'./.env'}
)
   
app.use("/api/v1/users",userrouter)
app.use("/api/v1/post",postrouter)
app.get('*',(req,res)=>res.sendFile(path.join(_dirname,'/client/build/index.html')))
Connectio()
.then(()=>{
  app.listen(process.env.Port,()=>{
    console.log(`server is running at port ${process.env.Port}`); 
})
})
.catch((err)=>console.log(err)
)
