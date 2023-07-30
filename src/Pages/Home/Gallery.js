import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { Header } from '../../Component/Navbar/Header'
import { CommingSoon } from '../../Component/CommingSoon/CommingSoon'
import { Chatbox } from '../../Component/Chatbox/Chatbox'


export const Gallery = () => {
  return (<>
    <div className='container'>
           <Navbar/>
           <div>
          <Header/>
          <CommingSoon/>
        </div>
          </div>
          <Chatbox/>
    </>
  )
}
