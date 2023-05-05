import React, { useState } from 'react';
import './Navbar.css'



const Navbar = () => {

  const navLinks = [
     'Home',
     'About',
     'Experience',
     'Work', 
     'Thought' 
  ];

  const renderNavLinks =(content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleNavClick = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior:
      "smooth" })
    }

    return(
      <ul key={content}>
        <li>
          <button 
            onClick={handleNavClick}
            className=' block mt-3 lg:inline-block text-gray-300 ml-1 font-roboto text-lg font-medium hover:text-green-500 mr-4 transition-all duration-200 cursor-pointer  '
            style={{ }}
            >
            {content}
          </button>

        </li>

      </ul>

    )
  }
  

  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between flex-wrap bg-[#041e3e] p-8 shadow-md space-x-80 " style={{ justifyContent: "space-x-86"}} >
      <div className="  z-20 flex items-center space flex-shrink-0 text-white" style={{marginLeft:'4rem'}}>
        <span className="font-semibold text-xl tracking-tight">My App</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm flex flex-wrap lg:flex-grow space-x-6 ml-80">

          {
            navLinks.map(nav => renderNavLinks (nav))
          }
          
          <a href='#' className=' top-0 relative px-5 p-3 h-12 flex items-center justify-between border-2 rounded-lg border-green-400 text-green-400 text-lg font-montserrat font-medium overflow-hidden'>
            <span 
              className='absolute w-0 group-hover:w-16 h-16 transition-all ease-out duration-300  bg-gray-400'>
            </span>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
