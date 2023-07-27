import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserContextProvider } from "./Context/UserContext";
import { UserProfileContextProvider } from "./Context/UserProfileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <UserProfileContextProvider>
        <App />
        </UserProfileContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
