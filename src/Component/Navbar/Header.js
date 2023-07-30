import React, { useContext, useEffect, useState } from 'react'
import {UserProfileContext} from "../../Context/UserProfileContext"
import { ProfileAccount } from '../Profile/ProfileAccount';

export const Header = () => {
  const [profileClicked,setProfileclicked] = useState(false)
  const [bodyOverflow,setBodyOverflow] = useState('auto')
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
    const onClickProfileHandle = ()=>{
      setProfileclicked(!profileClicked)
      
      if(bodyOverflow == "auto"){
        document.body.style.overflow = 'hidden';
        setBodyOverflow('hidden')
      }else{
        document.body.style.overflow = 'auto';
        setBodyOverflow('auto')
      }
    }

    

    console.log("profileClicked",profileClicked)
  return (
    <>
    <header className='header'>
        <h3>{currentPageName}</h3>
        <div className='user-profile-account' onClick={()=>onClickProfileHandle()} >
        <img  className='user-profile-account-img' src={userProfile && userProfile.profilepicture} alt={userProfile && userProfile.name}/>
        {userProfile && <p>{userProfile.name}</p>}
        {profileClicked && <ProfileAccount/>}
        </div>
        
    </header>
    <hr/>
    </>
    
  )
}
