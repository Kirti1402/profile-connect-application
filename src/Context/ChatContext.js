import React, { createContext, useState } from 'react'

export const ChatContext = createContext()
export const ChatContextProvider = ({children}) => {
    const [chatHeaderclicked, setChatHeaderclicked] = useState(false);
    const [userChatClicked,setUserChatClicked] = useState(false);
    const [userChatHeader,setUserChatHeaderClicked] = useState(false);
    const [userChatBox,setUserChatBox] = useState()
    const [chats,setChats] = useState(  [
      { id: 1, user: 'User', message: 'Lorem ipsum dolor sit amet, consectetur', timestamp: '2023-07-29 12:00:00' },
      { id: 2, user: 'Bot', message: 'Lorem ipsum dolor sit', timestamp: '2023-07-29 12:00:00' },
      { id: 3, user: 'User', message: 'Lorem ipsum ', timestamp: '2023-07-29 12:01:00' },
      { id: 5, user: 'User', message: 'Lorem ipsum dolor sit amet', timestamp: '2023-07-29 12:01:00' },
      { id: 6, user: 'Bot', message: 'Lorem ipsum sit', timestamp: '2023-07-29 12:02:00' },
      { id: 7, user: 'Bot', message: 'Lorem ipsum dolor', timestamp: '2023-07-29 12:02:00' },
      { id: 8, user: 'User', message: 'Lorem ipsum amet', timestamp: '2023-07-29 12:03:00' },
      // Add more chat messages as needed
    ])
  return (
    <ChatContext.Provider value={{userChatHeader,setUserChatHeaderClicked,chatHeaderclicked, setChatHeaderclicked,userChatClicked,setUserChatClicked,chats,setChats,userChatBox,setUserChatBox}}>
        {children}
    </ChatContext.Provider>
  )
}
