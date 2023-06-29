import React, { useState } from 'react';
import resumePDF from '../../Pages/portfolioAssets/kehinde-oderinde-resume.pdf'
import './Navbar.css'
import { GiIsland } from "react-icons/gi";
import { FaAlignJustify, FaTimes } from "react-icons/fa";





const Navbar = () => {
  const [nav, setNav] = useState(false)

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
      <ul 
        className=''
        key={content}>
        <li>
          <button 
            onClick={handleNavClick}
            className=' block mt-3 lg:inline-block text-gray-500 ml-1 font-roboto sm:text-base text-lg  font-normal hover:text-green-500 mr-4 hover:scale-105 transition-all duration-200 cursor-pointer'
            style={{ }}
            >
            {content}
          </button>

        </li>

      </ul>

    )
  }
  

  return (
    <header className=" fixed top-0 z-50 flex items-center justify-between flex-wrap backdrop-blur-lg  bg-[#020c1b] p-4 sm:p-4 shadow-md sm:space-x-36 w-full sm:w-full h-20 sm:h-20 " style={{ }} >
      <div className="  z-20 flex items-center ml-2 sm:ml-14 text-white" style={{}}>
        < GiIsland className=" text-green-500 font-semibold hover:text-white hover:bg-green-500  text-6xl p-2 sm:p-1 hover:animate-bounce duration-300 delay-300 transition-all "/>
      </div>
      <div className=" hidden md:flex w-full -mt-8  flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm flex flex-wrap lg:flex-grow justify-center space-x-6 ml-80">

          {
            navLinks.map(nav => renderNavLinks (nav))
          }
          
          <a href='https://drive.google.com/file/d/1iwWbcsQBxXud1b5GZxUBOX_otsbYyss2/view' target="_blank" rel="noopener noreferrer" className=' top-0 relative text-base font-montserrat font-medium  p-2 flex items-center justify-between  hover:ml-8 hover:text-white hover:bg-green-500  border border-green-500 rounded-lg overflow-hidden hover:skew-x-6'>
            <span className=' hover:text-white text-green-400'>Resume</span>
          </a>
        </div>
        
      </div>
        {/* menu icon */}
          <div 
            onClick={() => setNav (!nav)}
            className=' cursor-pointer mr-6 pl-10 z-10 md:hidden'>
              { nav ?  <FaTimes className='text-white' size={25}/> : <FaAlignJustify className=' text-white' size={25} />}
          </div> 

          { nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0
              left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white'>
            {
            navLinks.map(nav => renderNavLinks (nav))
            }

          <a href='https://drive.google.com/file/d/1bTNbZYXYxhQwxBrLhE9l-bFWve1C2QWn/view?usp=sharing' target="_blank" rel="noopener noreferrer" className=' top-0 relative text-base font-montserrat font-medium  p-2 flex items-center justify-between mt-4  hover:ml-8 hover:text-white hover:bg-green-500 border border-green-500 rounded-lg overflow-hidden hover:skew-x-6'>
            <span className=' hover:text-white text-green-400'>Resume</span>
          </a>
        </ul>

          )}
          

    </header>
  );
};

export default Navbar;

