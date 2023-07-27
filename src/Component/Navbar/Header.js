import React, { useContext, useEffect } from 'react'
import {UserProfileContext} from "../../Context/UserProfileContext"

export const Header = () => {
    const {activeItem,userProfile,setUserProfile} = useContext(UserProfileContext);
    console.log(userProfile);
    const currentPageName = activeItem.charAt(0).toUpperCase() + activeItem.slice(1)
    useEffect(() => {
      const storedUserProfile = localStorage.getItem('User');
      console.log(storedUserProfile)
      if (storedUserProfile) {
        setUserProfile(JSON.parse(storedUserProfile));
      }
    }, []);
  return (
    <>
    <header className='header'>
        <h3>{currentPageName}</h3>
        <div className='user-profile-account'>
        <img  src={userProfile && userProfile.profilepicture} alt={userProfile && userProfile.name}/>
        {userProfile && <p>{userProfile.name}</p>}
        </div>
        
    </header>
    <hr/>
    </>
    
  )
}
