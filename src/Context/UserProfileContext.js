import React, { createContext, useState } from "react";

export const UserProfileContext = createContext();
export const UserProfileContextProvider = ({ children }) => {
    const [userProfile,setUserProfile] = useState();
    const [activeItem, setActiveItem] = useState('Profile');
  return (
    <UserProfileContext.Provider value={{userProfile,setUserProfile,activeItem, setActiveItem}}>
      {children}
    </UserProfileContext.Provider>
  );
};
