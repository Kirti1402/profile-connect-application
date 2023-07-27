import React from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import { Header } from '../../Component/Navbar/Header'


export const Gallery = () => {
  return (
    <div className='container'>
         <Navbar/>
         <div>
        <Header/>
        <div>Content</div>
      </div>
        </div>
  )
}
