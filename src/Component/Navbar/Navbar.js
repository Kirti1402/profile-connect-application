import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../../Context/UserProfileContext";


export const Navbar = () => {
  const navigate = useNavigate();
  const { activeItem, setActiveItem } = useContext(UserProfileContext);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav className="side-navbar">
      <ul className="nav-list">
        <li
          className={`nav-list-item ${
            activeItem === "Profile" ? "active " : ""
          }`}
          onClick={() => handleItemClick("Profile")}
        >
          Profile
          {activeItem === 'Profile' && (
          <span className="cursoranimation">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
         
        </li>
        <hr/>
        <li
          className={`nav-list-item ${activeItem === "Post" ? "active" : ""}`}
          onClick={() => handleItemClick("Post")}
        >
          Post
          {activeItem === 'Post' && (
          <span className="cursoranimation">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        
        </li>
        <hr/>
        <li
          className={`nav-list-item ${
            activeItem === "Gallery" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Gallery")}
        >
          Gallery
          {activeItem === 'Gallery' && (
          <span className="cursoranimation">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        </li>
        <hr/>
        <li
          className={`nav-list-item ${activeItem === "ToDo" ? "active" : ""}`}
          onClick={() => handleItemClick("ToDo")}
        >
          To-Do
          {activeItem === 'ToDo' && (
          <span className="cursoranimation">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        </li>
      </ul>
    </nav>
  );
};
