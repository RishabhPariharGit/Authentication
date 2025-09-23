import React, {useState,useEffect} from 'react'
import Sidenav from '../Components/Sidenav'


const UserDetails = () => {

   const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="main-dashboard-main-wrapper">
     <Sidenav/>
      <div className="main-dashboard-wrapper">
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      </div>
    </div>
  );
};

export default UserDetails