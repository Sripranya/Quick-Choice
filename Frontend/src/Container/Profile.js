import React from 'react';
import "../CSS/ProfileBox.css";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Profile = () => {
  const getData = useSelector(state => state.userState.userDetails);
  const navigate = useNavigate();

  const Profilepage = () => {
    navigate("/"); 
  };

  return (
    <div className="profile-box">
      <div className="profile-details">
        <h1>{getData ? `See You later ${getData}` : "User not found"}</h1>
      </div>
      <button className='btn-2' onClick={Profilepage}>
        <FaSignOutAlt />
      </button>
     
    </div>
    
  );
};

export default Profile;


// import React from 'react';
// import "../CSS/ProfileBox.css";
// import { useNavigate } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const Profile = ({ profile }) => {
//   const getData = useSelector(state => state.userState.userDetails);
//   const navigate = useNavigate();
//   const Profilepage = () => {
//     navigate("./");
//   };

//   // Safely accessing properties of getData
//   const userName = getData?.name || 'N/A';
//   const userEmail = getData?.email || 'N/A';

//   return (
//     <div className="profile-box">
//       <div className="profile-details">
//         <h1>Profile Details</h1>
//         <h3>Name: {userName}</h3>
//         <h3>Email: {userEmail}</h3>
//       </div>
//       <button className='btn-2' onClick={Profilepage}>
//         <FaSignOutAlt />
//       </button>
//     </div>
//   );
// };

// export default Profile;