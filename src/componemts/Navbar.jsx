import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

// div အလွယ်ဆောက်ချင်ရင် .classname enter
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
          <span className='logo'>Apple Chat</span>
          <div className="user"> 
               {/* comment ပုံ link -> copy image adddress*/}
               <img src={currentUser.photoURL} alt=""/>
               <span>{currentUser.displayName}</span>
               <button onClick={()=>signOut(auth)}>logout</button> 
          </div>
    </div>
  )
}

export default Navbar