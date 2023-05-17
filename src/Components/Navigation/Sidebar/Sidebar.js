import React, { useState } from 'react'
import sidebarData_ from "./SidebarData"

const Sidebar = () => {

  const [items, setItems] = React.useState(sidebarData_)

    return (
        <React.Fragment>
        <div className=' z-30 sm:z-30 w-16 sm:w-32  bg-[#020c1b] fixed top-0' style={{ height : '300vh'}}>
          <div className='mt-60'></div>
          <div className='  mt-96 ml-0 sm:grid sm:ml-4 sm:mt-80 ' >
          {
            sidebarData_.map((item, index) => {
              return (
                <div 
                className='sidebar-row'
                id={window.location.href === item.link ? "active" : ""}
                key={index}
                onClick={() => {window.location.href = item.link}}
                >
                   <div className="sidebar-icon  text-xl text-slate-300 ml-4 sm:ml-12 mt-6 sm:mt-8 hover:text-green-500 ">{item.icon}</div>
                   
                </div>
              )
            })
          }
          </div>
          </div>
        </React.Fragment>
      )
    }

export default Sidebar