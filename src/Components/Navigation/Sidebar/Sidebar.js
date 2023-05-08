import React, { useState } from 'react'
import sidebarData_ from "./SidebarData"

const Sidebar = () => {

  const [items, setItems] = React.useState(sidebarData_)

    return (
        <React.Fragment>
        <div className='z-10 w-36  bg-[#020c1b] fixed top-0' style={{ height : '110vh'}}>
          <div className='mt-60'></div>
          <div className='sidebar-list'>
          {
            sidebarData_.map((item, index) => {
              return (
                <div 
                className='sidebar-row'
                id={window.location.href === item.link ? "active" : ""}
                key={index}
                onClick={() => {window.location.href = item.link}}
                >
                   <div className="sidebar-icon  text-xl text-slate-300 ml-16 mt-4 hover:text-green-500 ">{item.icon}</div>
                   
                </div>
              )
            })
          }
          </div>
          <div className=' h-48 border-l border-slate-400 flex mt-6' style={{ marginLeft: '70px'}}></div>             
          </div>
        </React.Fragment>
      )
    }

export default Sidebar