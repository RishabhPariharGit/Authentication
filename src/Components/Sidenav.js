import React from 'react'
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="main-side-drawer">
          <Link to="/userdetails">user profile</Link>
             <Link to="/users">users</Link>
         </div>
  )
}

export default Sidenav