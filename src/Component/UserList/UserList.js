import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../Context/UserContext";
import { UserProfileContext } from "../../Context/UserProfileContext";

export const UserList = () => {
  const navigate = useNavigate();

  const { usersDetail } = useContext(UserContext);
  const { setUserProfile } = useContext(UserProfileContext);

  //method to handle on click event on user account and navigating to respective user account
  const onClickAccountHandle = (user) => {
    const userName = user.name.split(" ").join("");
    setUserProfile(user);
    navigate(`/profile`);
  };

  return (
    <ul className="user-list">
      {usersDetail &&
        usersDetail.map((user,index) => {
          const { id, name, profilepicture } = user;
          return (
            <li key={id}>
              <div
                className="user-info"
                onClick={() => onClickAccountHandle(user)}
              >
                <img src={profilepicture} alt={name} />
                <p>{name}</p>
              </div>
              {(usersDetail.length-1) !== index ? <hr/> :""  }
            </li>
          );
        })}
    </ul>
  );
};
