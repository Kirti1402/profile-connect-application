import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [usersDetail, setUsersDetail] = useState([]);
  const getUsersDetail = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      if (response.status !== 200) {
        throw new Error("Failed to fetch user details.");
      }

      setUsersDetail(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersDetail();
  },[]);
  return <UserContext.Provider value={{usersDetail}}>{children}</UserContext.Provider>;
};
