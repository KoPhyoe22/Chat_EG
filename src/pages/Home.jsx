import React from "react"
import Sidebar from "../componemts/Sidebar"
import Chat from "../componemts/Chat"

const Home =() => {
     return (
          <div className="home">
               <div className="container">
                    <Sidebar/>
                    <Chat/>
               </div>
          </div>
     )
}

export default Home