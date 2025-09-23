// import React, { useEffect, useState } from "react";
// import Sidenav from "../Components/Sidenav";


// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <div className="main-dashboard-main-wrapper">
//      <Sidenav/>
//       <div className="main-dashboard-wrapper">
//       <h1>Welcome {user.name}, how is your day going?</h1>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Username:</strong> {user.username}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // if not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // go back to login
  };

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome {user.name}, how is your day going?</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
