import React, { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";

export const UserChat = () => {
  const {
    chatHeaderclicked,
    setChatHeaderclicked,
    userChatClicked,
    setUserChatClicked,
    chats,
    setChats,
    userChatBox,
    userChatHeader,setUserChatHeaderClicked
  } = useContext(ChatContext);

  const onClickArrowDownUserChat = ()=>{
    setUserChatHeaderClicked(true);
    setUserChatClicked(false);

  }

  return (<>
  {userChatClicked && <div className="user-chat-box">
        <div>
        <div className="user-chat-header">
        <div className="header-content">
          <img className="chatbox-img" src={userChatBox.profilepicture} alt="name" />
          <p>{userChatBox.name}</p>
        </div>
        <div className="header-content">
          <i className="fas fa-angle-down" onClick={()=>onClickArrowDownUserChat()}></i>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="chat-display">
        <ul>
        {chats &&
          chats.map((chat, index) => {
            return (
              <li className={chat.user == "User" ? "user-chats" : "bot-chats"}>
                <p>{chat.message}</p>
              </li>
            );
          })}
        </ul>
       
      </div>
        </div>
      
      <div className="message-input">
        <input type="text" />
      </div>
    </div>}
    {userChatHeader && <div className="chat-header">
        </div>}
  </>
    
  );
};
