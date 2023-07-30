import { useContext } from "react";
import { UserProfileContext } from "../../Context/UserProfileContext";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";


export const ProfileAccount = () => {
    const navigate = useNavigate();
  const { usersDetail } = useContext(UserContext);
  const { userProfile, setUserProfile } = useContext(UserProfileContext);

  const usersuggestion =
    usersDetail && usersDetail.filter(({ name }) => name !== userProfile.name);
const onClickHandleSignOut = ()=>{
    navigate("/");
    localStorage.removeItem("User");
}

const onClickHandleUserUpdate = (user) =>{
    setUserProfile(user);
    navigate("/profile")

}
  return (
    <div className="profile-account">
      <div className="profile-card">
        <div className="proile-card-user">
          <img
            className="profile-card-user-img"
            src={userProfile.profilepicture}
            alt={userProfile.name}
          ></img>
          <p>{userProfile.name}</p>
          <p>{userProfile.email}</p>
        </div>
        <div className="user-container">
          <ul className="user-suggestion-container">
            {usersuggestion &&
              usersuggestion.map((user, index) => {
                return (
                  <li key={user.id} >
                    {usersuggestion.length !== index ? <hr/> : ""}
                    <div
                      className="user-suggestion-list"
                      onClick={() => onClickHandleUserUpdate(user)}
                    >
                      <img src={user.profilepicture} alt={user.name} />
                      <p>{user.name}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="sign-out">
          <button onClick={onClickHandleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};
