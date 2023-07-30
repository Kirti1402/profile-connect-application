import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../../Context/UserProfileContext";

export const UserProfileDetail = () => {
  const { userProfile, setUserProfile } = useContext(UserProfileContext);
  console.log(userProfile);

  const storedUserProfile = localStorage.getItem("User");
  let locataion ;
  // useEffect(() => {
  //   console.log(storedUserProfile);
  //   if (storedUserProfile) {
  //     setUserProfile(JSON.parse(storedUserProfile));
  //   }
  // }, []);
  const {
    id,
    name,
    username,
    email,
    phone,
    profilepicture,
    address: {
      city,
      geo: { lat, lng },
      street,
      suite,
      zipcode,
    },
    company: { name: companyname, catchPhrase, bs },
    website,
  } = userProfile;
  return (
    <div className="profile-detail-container">
      <div className="profile-detail" key={id}>
        <img src={profilepicture} alt={name} />
        <h3 >{name}</h3>
        <div>
          <p className="user-detail">
            <span className="detail-title">Username :</span>
            <span>{username}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">e-mail :</span>
            <span>{email}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">Phone :</span>
            <span>{phone}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">Website :</span>
            <span>{website}</span>
          </p>
          <hr/>
          <h5 className="company-heading">Company</h5>
          <p className="user-detail">
            <span className="detail-title">Name :</span>
            <span>{companyname}</span>
          </p>
          <p className="user-detail">
            <span className="detail-title">catchPhrase :</span>
            <span>{catchPhrase}</span>
          </p>
          <p className="user-detail">
            <span className="detail-title">bs :</span>
            <span>{bs}</span>
          </p>
        </div>


      </div>

      <hr className="vertical-hr"/>
      <div className="location-detail">
        <div className="address-detail">
          <h3 className="address-heading">Address:</h3>
        <div>
          <p className="user-detail">
            <span className="detail-title">Street :</span>
            <span>{street}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">Suite :</span>
            <span>{suite}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">City :</span>
            <span>{city}</span>
          </p>

          <p className="user-detail">
            <span className="detail-title">Zipcode :</span>
            <span>{zipcode}</span>
          </p>
          <div>
            <iframe src={`https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`} className="map-location"></iframe>
            <div className="lat-lng">
            <p><span>Lat:</span><span>{lat}</span></p>
            <p><span>Long:</span><span>{lng}</span></p>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
