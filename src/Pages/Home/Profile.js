import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import "./HomeStyle.css"
import { Header } from '../../Component/Navbar/Header'
import { UserProfileDetail } from '../../Component/Profile/UserProfileDetail'
import { Chatbox } from '../../Component/Chatbox/Chatbox'




export const Profile = () => {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <div>
        <Header/>
        <UserProfileDetail/>
      </div>
    </div>
<Chatbox/>
    </>
    
  )
}
