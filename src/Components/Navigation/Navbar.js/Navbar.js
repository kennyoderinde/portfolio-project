import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { GiIsland } from "react-icons/gi";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = ['Home', 'About', 'Experience', 'Work', 'Contact'];

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleNavClick = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <motion.li
        className=''
        key={content}
        whileHover={{ scale: 1.3 }} // Add motion effect on hover
        whileTap={{ scale: 1.9 }} // Add motion effect when clicked
      >
        <button
          onClick={handleNavClick}
          className='block mt-3 md:inline-block text-gray-500 ml-1 font-roboto md:text-base text-lg  font-normal hover:text-green-500 mr-4 hover:scale-105 transition-all duration-200 cursor-pointer'
        >
          {content}
        </button>
      </motion.li>
    );
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between flex-wrap backdrop-blur-lg bg-[#020c1b] p-4 md:p-4 shadow-md md:space-x-36 lg:space-x-96 w-full md:w-full h-20 md:h-20 " style={{}}>
      <div className="z-20 flex items-center ml-2 md:ml-6 text-white" style={{}}>
        <GiIsland className="text-green-500 font-semibold hover:text-white hover:bg-green-500  text-6xl p-2 sm:p-1 hover:animate-bounce duration-300 delay-300 transition-all" />
      </div>
      <div className="hidden md:flex w-full md:-mt-10 lg:mt-3  flex-grow lg:flex md:items-center md:w-auto">
        <motion.ul className='text-sm md:flex md:flex-grow justify-center md:space-x-2 lg:space-x-12' initial={false} animate={nav ? "open" : "closed"}>
          {navLinks.map(nav => renderNavLinks(nav))}
          <a href='https://drive.google.com/file/d/1i86sVnO782DMr6ijUpVTfv0zeLy51Vhw/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='top-0 relative text-base font-montserrat font-medium p-2 flex items-center justify-between hover:ml-8 hover:text-white hover:bg-green-500 border border-green-500 rounded-lg overflow-hidden hover:skew-x-6'>
            <span className='hover:text-white text-green-400'>Resume</span>
          </a>
        </motion.ul>
      </div>
      {/* menu icon */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer mr-6 pl-10 z-10 md:hidden'>
        {nav ? <FaTimes className='text-white' size={25} /> : <FaAlignJustify className='text-white' size={25} />}
      </div>
      {nav && (
        <motion.ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white' variants={menuVariants}>
          {navLinks.map(nav => renderNavLinks(nav))}
          <a href='https://drive.google.com/file/d/1i86sVnO782DMr6ijUpVTfv0zeLy51Vhw/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='top-0 relative text-base font-montserrat font-medium p-2 flex items-center justify-between mt-4 hover:ml-8 hover:text-white hover:bg-green-500 border border-green-500 rounded-lg overflow-hidden hover:skew-x-6'>
            <span className='hover:text-white text-green-400'>Resume</span>
          </a>
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
