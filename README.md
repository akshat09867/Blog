#BLOGGING PLATFORM
This is the link of my website->
https://blog-jkdx.onrender.com/api/v1/users/register

##Description
This is a fullstack blogging platform built with using javascript library(react) on frontend and using node.js with Express and Mongodb on backend.
The platform allows users to create and delete blog posts.
Each blog post associated with it's respective author and user can login to manage their own post.


###Features
-User Authentication: Sign up, log in, and log out functionality using JWT with access and refresh tokens for secure session management.
Profile Picture Upload: Users can upload profile pictures during registration.
-Blog Posts: Users can create, delete, and view blog posts.
-Author Attribution: Each post is attributed to its respective author.
-Database: MongoDB is used for data storage, with Mongoose to handle schema and data modeling.
-Hashed Passwords: Secured password storage using bcrypt.


##Technologies Used

-Frontend: React, HTML5, CSS3
-Backend: Node.js, Express.js, Mongoose
-Database: MongoDB
-Cloudinary:For image uploads
-Authentication: JSON Web Tokens (JWT), bcrypt, Access and Refresh tokens
-Hosting: Render for frontend and backend


#Installation

1. Clone the repository
        https://github.com/akshat09867/Blog.git
2.Install dependencies 
        -cd Backend
        -npm init
        -npm i (All the dependencies or dev-dependencies which are in package.json file)
    -cd frontend
    -npm install 
3.Create a .env file(for Environment Variables)

    MONGODB_URI=yourMongoDBConnectionString
    SERVER_PORT=your port
    JWT_ACCESS_SECRET=your access token secret key
    JWT_REFRESH_SECRET=your refresh token secret key
    JWT_ACCESS_EXPIRATION=your access token expiring time
    JWT_REFRESH_EXPIRATION=your refresh token expiring time
    CLOUDINARY_API_KEY=your cloudinary api key
    CLOUDINARY_API_SECRET=your cloudinary api secret
    CLOUDINARY_CLOUD_NAME=your cloudinary  cloud name
4.Run 
    cd Backend
    npm run dev
5. Open your browser and navigate on http://localhost:{yourPort}/api/v1/users/register







