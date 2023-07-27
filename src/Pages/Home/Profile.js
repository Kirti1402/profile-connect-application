import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import "./HomeStyle.css"

export const Profile = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div>
        <div>Profile</div>
        <div>Content</div>
      </div>
    </div>
  )
}
