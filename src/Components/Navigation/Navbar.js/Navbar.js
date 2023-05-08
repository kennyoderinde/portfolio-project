import React, { useState } from 'react';
import './Navbar.css'
import { GiIsland } from "react-icons/gi";




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
            className=' block mt-3 lg:inline-block text-gray-300 ml-1 font-roboto text-base font-normal hover:text-green-500 mr-4 transition-all duration-200 cursor-pointer'
            style={{ }}
            >
            {content}
          </button>

        </li>

      </ul>

    )
  }
  

  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between flex-wrap bg-[#020c1b] p-4 shadow-md space-x-72 " style={{ }} >
      <div className="  z-20 flex items-center  text-white" style={{marginLeft:'6rem'}}>
        < GiIsland className=" text-green-500 font-semibold hover:text-white hover:bg-green-500 text-6xl p-1 hover:animate-bounce duration-300 delay-300 transition-all "/>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm flex flex-wrap lg:flex-grow justify-center space-x-6 ml-80">

          {
            navLinks.map(nav => renderNavLinks (nav))
          }
          
          <a href='https://docs.google.com/document/d/1Xr3lNd3A1wIh-sQOtXfMMwt1YT4tAnfGWtzS8X30Iwk/edit' className=' top-0 relative text-base font-montserrat font-medium  p-2 flex items-center justify-between  hover:ml-8 hover:text-white hover:bg-green-500  border border-green-500 rounded-lg overflow-hidden hover:skew-x-6'>
           
            <span className=' hover:text-white text-green-400'>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
