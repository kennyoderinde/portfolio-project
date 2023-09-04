import React, { useState } from "react";
import { motion } from 'framer-motion';
import Stutern from './Stutern'
import Reacthq from './Reacthq'
import Eelive from './Eelive'

const ExperiencePage = () => {
  const [selectedOption, setSelectedOption] = useState("Stutern");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const settingsOptions = [
    { id: 1, name: "Stutern" },
    { id: 2, name: "Reacthq" },
    { id: 3, name: "Eelive" },
  ];

  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>
        <motion.a
          id='option-style'
          href="#"
          onClick={() => handleOptionClick(option.name)}
          className={` font-roboto flex items-center px-4 py-4 ${
            selectedOption === option.name
              ? " text-gray-100 font-roboto hover:text-green-500"
              : "text-gray-500 hover:text-green-500 font-roboto text-lg"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {option.name}
          {selectedOption === option.name && (
            <span className="sm:inline-block w-1 sm:w-1 h-10 bg-green-500 ml-6"></span>
          )}
        </motion.a>
      </li>
    ));
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Stutern":
        return <Stutern />;
      case "Reacthq":
        return <Reacthq />;
      case "Eelive":
        return <Eelive />;
      default:
        return <Stutern />;
    }
  };

  return (
    <div id="experienceSection" className='z-20 flex-auto bg-[#020c1b] lg:ml-24 md:-ml-4 sm:p-4 md:-top-32 mt-60 w-80 sm:w-full ' style={{ height: '150%' }}>
      <div className="relative sm:p-12 left-5 sm:left-20 top-10 sm:top-20">
        <div className='flex md:mt-0  mt-20 md:ml-0 ml-16 p-4 '>
          <motion.p
            className=' text-lg sm:text-lg font-medium text-green-400 font-montserrat'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            02.
          </motion.p>
          <motion.span
            className=' whitespace-nowrap text-2xl sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Where I have worked
          </motion.span>
          <motion.div
            className=' ml-8 mt-6 border-t border-gray-500 lg:w-64 md:w-64 w-10'
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        <div className=" mx-auto sm:py-8">
          <div className="md:flex md:flex-wrap lg:-mx-4 md:space-x-24 lg:space-x-16 ">
            <div className="md:w-1/6 ">
              <div className="bg-none hover:text-green-500 shadow-md text-base ">
                <ul className="md:flex md:flex-col md:-mt-3 md:ml-0 mx-auto justify-center mt-10 flex ">{renderSettingsOptions()}</ul>
              </div>
            </div>
            <div className="md:w-3/5 w-full p-4 md:px-4 px-10">
              <motion.div
                className="z-40 text-gray-400 sm:text-black sm:bg-white opacity-80 sm:shadow-md  md:px-8 sm:py-6 md:-ml-20 w-0.8rem md:w-0.5rem h-0.28rem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {renderSelectedOption()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
