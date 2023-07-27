import React, { useContext } from "react";
import { UserProfileContext } from "../../Context/UserProfileContext";

export const UserProfileDetail = () => {
  const { userProfile } = useContext(UserProfileContext);
  console.log(userProfile);
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
  } = userProfile;
  
  return (
    <div>
      <div></div>
    </div>
  );
};
