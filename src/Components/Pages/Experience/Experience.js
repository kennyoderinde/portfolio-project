import React, { useState } from "react";
import Stutern from './Stutern'
import Reacthq from './Reacthq'
import Eelive from './Eelive'
// import './Experience.css'

const ExperiencePage = () => {
  const [selectedOption, setSelectedOption] = useState("");

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
        <a
          id='option-style'
          href="#"
          onClick={() => handleOptionClick(option.name)}
          className={` font-roboto flex items-center px-4 py-4 ${
            selectedOption === option.name
              ? " text-gray-100 font-roboto hover:text-green-500"
              : "text-gray-500 hover:text-green-500 font-roboto text-lg"
          }`}
        >
          {option.name}
          {selectedOption === option.name && (
            <span className="sm:inline-block w-1 sm:w-1 h-10 bg-green-500 ml-6"></span>
          )}
        </a>
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
// relative sm:relative  flex-auto bg-[#020c1b] z-20 left-28 sm:-top-20 p-12 sm:p-20 sm:w-full
  return (
    <div id="experienceSection" className=' z-40 relative sm:relative flex-auto bg-[#020c1b] left-38 sm:left-28 sm:p-4 -top-52 sm:-top-60 w-80 sm:w-full ' style={{ height: '150%'}}>
      <div className=" relative  sm:p-12 -left-20 sm:left-20 top-10 sm:top-20">
          <div className='flex sm:mt-0 mt-20 '>
            <p className=' text-lg sm:text-lg font-medium text-green-400 font-montserrat'>02.  </p>
            <span className=' whitespace-nowrap text-2xl sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Where I have worked</span>
            <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
          </div>
        <div className="container mx-auto sm:py-8">
          <div className="sm:flex sm:flex-wrap sm:-mx-4">
            <div className="md:w-1/6 ">
              <div className="bg-none hover:text-green-500 shadow-md text-base">
                <ul className="sm:flex sm:flex-col -mt-3 flex">{renderSettingsOptions()}</ul>
              </div>
            </div>
            <div className="sm:w-3/5 w-screen p-4 sm:px-4 px-1">
              <div className=" z-40 text-gray-400 sm:text-black sm:bg-white opacity-80 sm:shadow-md  sm:px-8 sm:py-6 sm:-ml-20 w-0.8rem sm:w-0.5rem h-0.28rem " style={{ }}>
                {renderSelectedOption()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
