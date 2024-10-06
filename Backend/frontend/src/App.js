import React from "react";
import Login from './controllers/login.js'
import Register from './controllers/register.js'
import Logout from "./controllers/logout.js";
import Home from './controllers/homepage.js'
import CreatePost from "./controllers/Createpost.js";
import Profile from './controllers/Profile.js'
import { Mypost } from "./controllers/Mypost.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <>
       <Router>
      <Routes>
       <Route exact path="/api/v1/users/register" Component={Register} />
       <Route exact path="/api/v1/users/login" Component={Login } />
       <Route exact path="/api/v1/users/home" Component={Home } />
       <Route exact path="/api/v1/users/logout" Component={Logout } />
       <Route exact path="/api/v1/post/Cpost" Component={CreatePost} />
       <Route exact path="/api/v1/post/profile" Component={Profile} />
       <Route exact path="/api/v1/post/" Component={Mypost} />

      </Routes>
    </Router>
    
    </>
 
  )
}
export default App;

