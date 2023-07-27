import React,{useContext} from 'react'
import { UserProfileContext } from '../../Context/UserProfileContext'


export const UserProfileDetail = () => {
  const {userProfile} =useContext(UserProfileContext)
  console.log(userProfile)
  const {} = userProfile
  return (
    <div>
      
        <div>

          </div>
        
      
    </div>
  )
}
