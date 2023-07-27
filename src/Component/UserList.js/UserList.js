import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import {Link} from "react-router-dom"


export const UserList = () => {
    const { usersDetail } = useContext(UserContext)
  return (
    <ul className='user-list'>{usersDetail && usersDetail.map(user =>{
        const {id,name,profilepicture} = user
        return <li key={id}>
           
            <div className='user-info'>
            <img src={profilepicture} alt={name}/>
            <p>{name}</p>
            </div>
            <hr></hr>
           
        </li>
    })}</ul>
  )
}
