import React, { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { UserChatSuggestion } from "./UserChatSuggestion";

export const Chatbox = () => {
  const { chatHeaderclicked, setChatHeaderclicked } = useContext(ChatContext);
  return (
    <div>
      {chatHeaderclicked ? (
        <UserChatSuggestion />
      ) : (
        <div className="chat-header" onClick={()=>setChatHeaderclicked(!chatHeaderclicked)}>
          <div className="chat-text">
            <i className="far fa-comment-alt"></i>
            <span>Chats</span>
          </div>

          <i className="fas fa-angle-up"></i>
        </div>
      )}
    </div>
  );
};
