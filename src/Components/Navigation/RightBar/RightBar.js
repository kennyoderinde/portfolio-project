import React, { useState } from 'react'

const RightBar = () => {


    return (
        <React.Fragment>
        <div className='z-10  fixed bg-[#020c1b] top-0' style={{width: "7rem", height : '110vh', left: "93%"}}>
          <div className='mt-52'></div>
            <div className="flex items-center flex-col p-2">
                {Array.from("kennyoderyndeh@gmail.com").map((char, index) => (
                    <span key={index} className=" font-montserrat text-sm justify-center font-medium text-gray-400 hover:text-green-500 leading-3">
                    {char}
                    </span>
                ))}
            </div>
          <div className=' h-48 border-l border-slate-400 ml-14 mt-6' style={{}}></div>    
         </div>
        </React.Fragment>
      )
    }

export default RightBar