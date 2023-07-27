import React,{useContext} from 'react'
import { UserProfileContext } from '../../Context/UserProfileContext'


export const UserProfileDetail = () => {
  const {userProfile} =useContext(UserProfileContext)
  console.log(userProfile)
  return (
    <div>
      <div>
        <h1>Profile</h1>
        
      </div>
    </div>
  )
}
