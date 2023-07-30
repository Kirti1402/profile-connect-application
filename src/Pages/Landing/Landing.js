import { UserList } from "../../Component/UserList/UserList";
import "./LandingStyle.css";

export const Landing = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        style={{
          position: 'absolute',
          top: 10,
          left: 0,
          zIndex: -1,
        }}
      >
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 89.5,347.7307692307692 179,345.46153846153845 267,364 C 355,382.53846153846155 441.5,421.8846153846154 518,411 C 594.5,400.1153846153846 661.0000000000001,339.00000000000006 738,337 C 814.9999999999999,334.99999999999994 902.5000000000002,392.1153846153846 984,383 C 1065.4999999999998,373.8846153846154 1140.9999999999998,298.53846153846155 1216,282 C 1291.0000000000002,265.46153846153845 1365.5,307.7307692307692 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="#E0D4F4"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        />
      </svg>
        <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 89.5,347.7307692307692 179,345.46153846153845 267,364 C 355,382.53846153846155 441.5,421.8846153846154 518,411 C 594.5,400.1153846153846 661.0000000000001,339.00000000000006 738,337 C 814.9999999999999,334.99999999999994 902.5000000000002,392.1153846153846 984,383 C 1065.4999999999998,373.8846153846154 1140.9999999999998,298.53846153846155 1216,282 C 1291.0000000000002,265.46153846153845 1365.5,307.7307692307692 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="#5F3AC8"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        />
      </svg>
    


      <div className="centered-container">
        <div className="account-selection">
          <h3 className="account-selection-heading">Select an account</h3>
          <UserList />
        </div>
      </div>
    </>
  );
};
