import { UserList } from "../../Component/UserList/UserList";
import "./LandingStyle.css";

export const Landing = () => {
  return (
    <>
      <div className="wave-1"></div>
      <div className="centered-container">
        <div className="account-selection">
          <h2 className="account-selection-heading">Select an account</h2>
          <UserList />
        </div>
      </div>
    </>
  );
};
