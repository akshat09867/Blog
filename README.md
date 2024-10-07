<h1>#BLOGGING PLATFORM</h1>
<h2>This is the link of my website-></h2>
https://blog-jkdx.onrender.com/api/v1/users/register  

<h2>#Description</h2>
<p>This is a fullstack blogging platform built with using javascript library(react) on frontend and using node.js with Express and Mongodb on backend.</p>
<p>The platform allows users to create and delete blog posts.</p>
<p>Each blog post associated with it's respective author and user can login to manage their own post.</p>


<h2>#Features</h2>
<p>-User Authentication: Sign up, log in, and log out functionality using JWT with access and refresh tokens for secure session management.</p>
<p>-Profile Picture Upload: Users can upload profile pictures during registration.</p>
<p>-Blog Posts: Users can create, delete, and view blog posts.</p>
<p>-Author Attribution: Each post is attributed to its respective author.</p>
<p>-Database: MongoDB is used for data storage, with Mongoose to handle schema and data modeling.</p>
<p>-Hashed Passwords: Secured password storage using bcrypt.</p>


<h2>#Technologies Used</h2>

<p>-Frontend: React, HTML5, CSS3</p>
<p>-Backend: Node.js, Express.js, Mongoose</p>
<p>-Database: MongoDB</p>
<p>-Cloudinary:For image uploads</p>
<p>-Authentication: JSON Web Tokens (JWT), bcrypt, Access and Refresh tokens</p>
<p>-Hosting: Render for frontend and backend</p>


<h2>#Installation</h2>

<p>1. Clone the repository</p>
        https://github.com/akshat09867/Blog.git
<p>2.Install dependencies</p> 
        -cd Backend
        -npm init
        -npm i (All the dependencies or dev-dependencies which are in package.json file)
    -cd frontend
    -npm install 
<p>3.Create a .env file(for Environment Variables)</p>

    MONGODB_URI=yourMongoDBConnectionString</br>
    SERVER_PORT=your port</br>
    JWT_ACCESS_SECRET=your access token secret key</br>
    JWT_REFRESH_SECRET=your refresh token secret key</br>
    JWT_ACCESS_EXPIRATION=your access token expiring time</br>
    JWT_REFRESH_EXPIRATION=your refresh token expiring time</br>
    CLOUDINARY_API_KEY=your cloudinary api key</br>
    CLOUDINARY_API_SECRET=your cloudinary api secret</br>
    CLOUDINARY_CLOUD_NAME=your cloudinary  cloud name</br>
<p>4.Run </p>
    cd Backend</br>
    npm run dev
<p style="font-size:35px">5. Open your browser and navigate on http://localhost:{yourPort}/api/v1/users/register</p>







