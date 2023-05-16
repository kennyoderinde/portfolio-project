import React, { useState } from 'react'
import projectsData from './MiniProjectData'

const MiniProjects = () => {

  const [items, setItems] = React.useState(projectsData)

    return (
        <React.Fragment>
        <div className=' '  >
          <div className='grid'>
            <p className=' flex items-center justify-center text-gray-200 font-montserrat font-semibold text-2xl whitespace-nowrap mt-20'>Other Noteworthy Projects</p>
            <span className= 'flex items-center justify-center text-green-500 font-roboto font-normal text-base whitespace-nowrap leading-10'>view the archive</span>
          </div>
          <div className='' >
          {
            items.map((item, index) => {
              return (
                <div 
                className=' bg-[#131e31] inline-block mr-6 mt-6 transition-all duration-1000 delay-200 hover:mt-4 hover:mr-4'
                style={{ width: '21rem', height: '21rem'}}
                id={window.location.href === item.link ? "active" : ""}
                key={index}
                onClick={() => {window.location.href = item.link}}
                >
                   <div className='flex space-x-44 mt-6 p-6'>
                    <div className="  text-3xl text-green-500  hover:text-white ">{item.icon1}</div>
                    <div className=' flex space-x-6 ml-20'>
                      <div className="  text-xl text-slate-100  hover:text-green-500 ">{item.icon2}</div>
                      <div className="  text-xl text-slate-100  hover:text-green-500 ">{item.icon3}</div>
                    </div>
                   </div>
                   <div className="  text-xl text-gray-100 font-montserrat font-semibold p-5 ">{item.title1}</div>
                   <div className="  text-sm text-gray-100 font-montserrat font-normal -mt-3 p-5 ">{item.title2}</div>
                   <div className="  text-sm text-gray-300 font-roboto font-light -mt-4 p-5  ">{item.devtools}</div>

                </div>
              )
            })
          }
          </div>
          </div>
          {/* <div className=' w-20 h-20 flex items-center justify-center hover:ml-8 hover:bg-green-500 hover:opacity-70 border-2 border-green-500 rounded-lg'>
              <button type='button' className=' w-20 h-20 hover:bg-green-500 hover:ml-8 hover:mt-8 transition-all duration-1000 delay-500 rounded-lg' />
          </div> */}

        </React.Fragment>
      )
    }

export default MiniProjects