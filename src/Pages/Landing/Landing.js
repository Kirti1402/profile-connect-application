import React from "react";
import "./LandingStyle.css";
import { UserList } from "../../Component/UserList.js/UserList";

export const Landing = () => {
  return (
    <>
      <div className="wave-1"></div>
      <div className="centered-container">
        <div className="account-selection">
          <h2 className="account-selection-heading">Select an account</h2>
          <UserList />
        </div>
      </div>
    </>
  );
};
