import React, { useState } from 'react'
import sidebarData_ from "./SidebarData"

const Sidebar = () => {

  const [items, setItems] = React.useState(sidebarData_)

    return (
        <React.Fragment>
        <div className='z-10 w-36  bg-[#041e3e] fixed top-0' style={{ height : '110vh'}}>
          <div className='mt-60'></div>
          <div className='sidebar-list'>
          {
            sidebarData_.map((item, index) => {
              return (
                <div 
                className='sidebar-row'
                id={window.location.pathname === item.link ? "active" : ""}
                key={index}
                onClick={() => {window.location.pathname = item.link}}
                >
                   <div className="sidebar-icon  text-xl text-slate-300 ml-16 mt-4 hover:text-green-500 ">{item.icon}</div>
                   
                </div>
              )
            })
          }
          </div>
          <div className=' h-48 border-l border-slate-400 ml-20 mt-6' style={{}}></div>             
          </div>
        </React.Fragment>
      )
    }

export default Sidebar