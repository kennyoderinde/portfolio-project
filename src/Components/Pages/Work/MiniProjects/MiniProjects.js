import React, { useState } from 'react'

import { FaShirtsinbulk } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { TbBrandVercel } from "react-icons/tb";



const projectsData = [
  {
    id: 1,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://example.com/1')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('https://example.com/3')} />,
    title1: 'Prime Numbers Multiplication table',
    title2: 'React Form page updated with hook state',
    devtools: 'React, CSS, Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    title1: 'Workers Review',
    title2: 'Itemizing a restaurant menu list',
    devtools: 'React, CSS, Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://example.com/4')} />,
    icon2: <FiGithub onClick={() => handleClick('https://example.com/5')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('https://example.com/6')} />,
    title1: 'Prime Numbers Multiplication table',
    title2: 'React Form page updated with hook state',
    devtools: 'React, CSS, Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://example.com/4')} />,
    icon2: <FiGithub onClick={() => handleClick('https://example.com/5')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('https://example.com/6')} />,
    title1: 'Prime Numbers Multiplication table',
    title2: 'React Form page updated with hook state',
    devtools: 'React, CSS, Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://example.com/4')} />,
    icon2: <FiGithub onClick={() => handleClick('https://example.com/5')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('https://example.com/6')} />,
    title1: 'Prime Numbers Multiplication table',
    title2: 'React Form page updated with hook state',
    devtools: 'React, CSS, Git'
  }
];


const handleClick = (url) => {
  // Use a suitable method to navigate to the given URL, e.g., window.location.href = url;
  console.log('Navigating to:', url);
};


const MiniProjects = () => {

  const [items, setItems] = React.useState(projectsData)

    return (
        <React.Fragment>
        <div className=' '  >
          <div className='grid'>
            <p className=' flex items-center justify-center text-gray-200 font-montserrat font-semibold text-2xl whitespace-nowrap mt-20'>Other Noteworthy Projects</p>
            <span className= 'flex flex-wrap items-center justify-center text-green-500 font-roboto font-normal text-base whitespace-nowrap leading-10'>view the archive</span>
          </div>
          <div className=''>
          {projectsData.map((project) => (
            
            <div key={project.id}
            className=' bg-[#131e31] inline-block mr-6 mt-6 transition-all duration-1000 delay-200 hover:mt-4 hover:mr-4'
            style={{ width: '21rem', height: '21rem'}}
            >
              
              <div className='flex space-x-44 mt-6 p-6'>
                <div className="  text-3xl text-green-500  hover:text-white ">{project.icon1}</div>
                <div className=' flex space-x-6 ml-20'>
                  <div className="  text-xl text-slate-100  hover:text-green-500 ">{project.icon2}</div>
                  <div className="  text-xl text-slate-100  hover:text-green-500 ">{project.icon3}</div>
                </div>
                </div>
                <div className="  text-lg text-gray-100 font-montserrat font-normal -mt-3 p-5 ">{project.title1}</div>
                <div className="  text-lg text-gray-100 font-montserrat font-normal -mt-3 p-5 ">{project.title2}</div>
                <div className="  text-sm text-gray-300 font-roboto font-light -mt-4 p-5  ">{project.devtools}</div>
            </div>
          ))}
    </div>
          </div>
          {/* <div className=' w-20 h-20 flex items-center justify-center hover:ml-8 hover:bg-green-500 hover:opacity-70 border-2 border-green-500 rounded-lg'>
              <button type='button' className=' w-20 h-20 hover:bg-green-500 hover:ml-8 hover:mt-8 transition-all duration-1000 delay-500 rounded-lg' />
          </div> */}

        </React.Fragment>
      )
    }

export default MiniProjects


