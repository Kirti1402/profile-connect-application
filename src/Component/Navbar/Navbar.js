import React, { useContext } from "react";
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
            activeItem === "Profile" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Profile")}
        >
          Profile
        </li>
        <li
          className={`nav-list-item ${activeItem === "Post" ? "active" : ""}`}
          onClick={() => handleItemClick("Post")}
        >
          Post
        </li>
        <li
          className={`nav-list-item ${
            activeItem === "Gallery" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Gallery")}
        >
          Gallery
        </li>
        <li
          className={`nav-list-item ${activeItem === "ToDo" ? "active" : ""}`}
          onClick={() => handleItemClick("ToDo")}
        >
          To-Do
        </li>
      </ul>
    </nav>
  );
};
