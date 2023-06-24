import React from 'react'
import Navbar from '../componemts/Navbar'
import Search from '../componemts/Search'
import Chats from '../componemts/Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
          <Navbar/>
          <Search/>
          <Chats/>
     </div>
    
  )
}

export default Sidebar