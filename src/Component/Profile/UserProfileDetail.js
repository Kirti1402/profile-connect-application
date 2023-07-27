import React, { useContext,useEffect } from "react";
import { UserProfileContext } from "../../Context/UserProfileContext";

export const UserProfileDetail = () => {
  const { userProfile ,setUserProfile} = useContext(UserProfileContext);
  console.log(userProfile);
  
  const storedUserProfile = localStorage.getItem('User');
  useEffect(() => {
    console.log(storedUserProfile)
    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    }
  }, []);
  const {
    id,
    name,
    username,
    email,
    profilepicture, 
    address: {
      city,
      geo: { lat, lng },
      street,
      suite,
      zipcode,
    },
    company: { name: companyname, catchPhrase, bs },
    website
  } = userProfile
  return (
    <div className="profile-detail-container">
       <div className="profile-detail" key={id}>
        <img  src={profilepicture} alt={name}/>
        <h2>{name}</h2>
        <p className="user-detail"><span>Username</span><span>:</span><span>{username}</span></p>
        <p className="user-detail"><span>Email</span><span>:</span><span>{email}</span></p>
      </div>
        <hr/>
      
      <div>Loaction</div>
    </div>
  );
};
