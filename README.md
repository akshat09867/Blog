# BLOGGING PLATFORM

This is the link of my [website](https://blog-jkdx.onrender.com/api/v1/users/register)  

## Description
This is a fullstack blogging platform built using JavaScript library (React) on the frontend and Node.js with Express and MongoDB on the backend.

The platform allows users to create and delete blog posts.  
Each blog post is associated with its respective author, and users can log in to manage their own posts.

## Features
- **User Authentication:** Sign up, log in, and log out functionality using JWT with access and refresh tokens for secure session management.
- **Profile Picture Upload:** Users can upload profile pictures during registration.
- **Blog Posts:** Users can create, delete, and view blog posts.
- **Author Attribution:** Each post is attributed to its respective author.
- **Database:** MongoDB is used for data storage, with Mongoose to handle schema and data modeling.
- **Hashed Passwords:** Secured password storage using bcrypt.

## Technologies Used
- **Frontend:** React, HTML5, CSS3
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Cloudinary:** For image uploads
- **Authentication:** JSON Web Tokens (JWT), bcrypt, Access and Refresh tokens
- **Hosting:** Render for frontend and backend

## Installation

1. Clone the repository:  
   https://github.com/akshat09867/Blog.git

2. Install dependencies:  
    ```bash
    cd Backend
    npm init
    npm i
    cd frontend
    npm install
    ```

3. Create a `.env` file (for Environment Variables):
    ```bash
    MONGODB_URI=yourMongoDBConnectionString
    SERVER_PORT=yourPort
    JWT_ACCESS_SECRET=yourAccessTokenSecretKey
    JWT_REFRESH_SECRET=yourRefreshTokenSecretKey
    JWT_ACCESS_EXPIRATION=yourAccessTokenExpiringTime
    JWT_REFRESH_EXPIRATION=yourRefreshTokenExpiringTime
    CLOUDINARY_API_KEY=yourCloudinaryApiKey
    CLOUDINARY_API_SECRET=yourCloudinaryApiSecret
    CLOUDINARY_CLOUD_NAME=yourCloudinaryCloudName
    ```

4. Run:  
    ```bash
    cd Backend
    npm run dev
    ```

5. Open your browser and navigate to:  
   `http://localhost:{yourPort}/api/v1/users/register`
