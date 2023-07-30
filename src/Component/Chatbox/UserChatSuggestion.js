import React, { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { UserContext } from "../../Context/UserContext";
import { UserProfileContext } from "../../Context/UserProfileContext";
import { UserChat } from "./UserChat";


export const UserChatSuggestion = () => {
    const {usersDetail} = useContext(UserContext)
    const { userProfile} = useContext(UserProfileContext);
    const { chatHeaderclicked, setChatHeaderclicked,userChatClicked,setUserChatClicked,setUserChatBox,userChatHeader,setUserChatHeaderClicked } = useContext(ChatContext);

    const userChatoption = usersDetail && usersDetail.filter(({username})=> username !== userProfile.username)

    const onClickUserChat = (user)=>{
        setUserChatHeaderClicked(false)
        setUserChatClicked(true);
        setUserChatBox(user)
    }

    const onClickArrowDownChatList = () =>{
        setChatHeaderclicked(!chatHeaderclicked)
        setUserChatClicked(false);
    }
  return (
    <div className="user-chat-container">
      <div
        className="user-chat-suggestion"
        
      >
        <div className="user-chat-suggestion-header">
          <div className="chat-text">
            <i className="far fa-comment-alt"></i>
            <span>Chats</span>
          </div>
          <div>
            <i className="fas fa-angle-down"  onClick={onClickArrowDownChatList }></i>
          </div>
        </div>

        <div className="user-chat-list">
            {userChatoption && userChatoption.map((user,index)=> <li>
                    <div className="img-name" onClick={()=>onClickUserChat(user)} >
                    <img src={user.profilepicture} alt={user.name}/> 
                    <p>{user.name}</p>
                    </div>
                    <div>
                    {index%2==0 ? (<i className="fas fa-circle fa-xs smaller-circle " style={{color:'#1FAC5F'}}></i>) : (<i className="fas fa-circle fa-xs smaller-circle" style={{color:'grey'}}></i>)}
                    
                    </div>

            </li>)}
        </div>
      </div>
      {userChatClicked && <UserChat/>}
    </div>
  );
};
