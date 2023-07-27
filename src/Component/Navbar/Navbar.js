import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../../Context/UserProfileContext";


export const Navbar = () => {
  const navigate = useNavigate();
  const { activeItem, setActiveItem } = useContext(UserProfileContext);
  //on click nav list setting the nav and navigating to respective nav item
  const handleItemClick = (navListItem) => {
    setActiveItem(navListItem);
    navigate(`/${navListItem}`)
  };
  return (
    <nav className="side-navbar">
      <ul className="nav-list">
        <li
          className={`nav-list-item ${
            activeItem === "profile" ? "active " : ""
          }`}
          onClick={() => handleItemClick("profile")}
        >
          Profile
          {activeItem === 'profile' && (
          <span className="arrow-icon">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
         
        </li>
        <hr/>
        <li
          className={`nav-list-item ${activeItem === "post" ? "active" : ""}`}
          onClick={() => handleItemClick("post")}
        >
          Post
          {activeItem === 'post' && (
          <span className="arrow-icon">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        
        </li>
        <hr/>
        <li
          className={`nav-list-item ${
            activeItem === "gallery" ? "active" : ""
          }`}
          onClick={() => handleItemClick("gallery")}
        >
          Gallery
          {activeItem === 'gallery' && (
          <span className="arrow-icon">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        </li>
        <hr/>
        <li
          className={`nav-list-item ${activeItem === "todo" ? "active" : ""}`}
          onClick={() => handleItemClick("todo")}
        >
          To-Do
          {activeItem === 'todo' && (
          <span className="arrow-icon">   <FontAwesomeIcon icon={faAngleRight} style={{ color: '#e2e5e9' }} /></span>
        )}
        </li>
      </ul>
    </nav>
  );
};
