// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Profile from './Pages/Profile';
// import UserDetails from './Pages/UserDetails';
// import Users from './Pages/Users';

// const Webroutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//   <Route path="/" element={<Home/>} />
//   <Route path="/profile" element={<Profile/>} />
//   <Route path="/userdetails" element={<UserDetails/>}/>
//   <Route path="/users" element={<Users/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default Webroutes


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Userauth/Login";
import Signup from "./Userauth/Signup";
import Profile from "./Pages/Profile";

function Webroutes() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Signup />}
        />

        {/* Protected Route */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/profile" />}
        />
      </Routes>
    </Router>
  );
}

export default Webroutes;
