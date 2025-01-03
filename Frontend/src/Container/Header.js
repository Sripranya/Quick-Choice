import React, { useEffect, useState } from "react";
import '../CSS/Header.css';
import Profile from './Profile';
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { useSelector } from 'react-redux';

const Header = () => {
  const getData = useSelector(state => state.userState.userDetails);
  const [data, setData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (getData) {
      // Assuming getData is a string or you want to display a specific property of an object
      const userDetail = typeof getData === 'object' ? getData.someProperty : getData; // Adjust 'someProperty' as needed
      setData(userDetail);
      localStorage.setItem('UserDetails', JSON.stringify(getData));
      console.log(getData);
    }
  }, [getData]);

  console.log(":::::::::", data);

  const Profilepage = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>QUICK CHOICE</h2>
        <h3 className="name_1">Welcome &nbsp; {data}!</h3> {/* Directly render the string */}
        <button className='btn-1' style={{ marginRight: "24px" }} onClick={Profilepage}>
          <FaSignOutAlt  />
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Profile profile={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

