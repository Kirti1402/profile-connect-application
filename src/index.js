import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserContextProvider } from "./Context/UserContext";
import { UserProfileContextProvider } from "./Context/UserProfileContext";
import { ChatContextProvider } from "./Context/ChatContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <UserProfileContextProvider>
          <ChatContextProvider>
        <App />
        </ChatContextProvider>
        </UserProfileContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
