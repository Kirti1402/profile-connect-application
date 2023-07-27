import React, { createContext, useState } from "react";

export const UserProfileContext = createContext();
export const UserProfileContextProvider = ({ children }) => {
    const [userProfile,setUserProfile] = useState();
  return (
    <UserProfileContext.Provider value={{userProfile,setUserProfile}}>
      {children}
    </UserProfileContext.Provider>
  );
};
