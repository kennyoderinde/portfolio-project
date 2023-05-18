import React, { useState } from "react";
import Stutern from './Stutern'
import Reacthq from './Reacthq'
import Eelive from './Eelive'

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

  return (
    <div id="experienceSection" className=' sm:z-30 relative sm:relative bg-[#020c1b] left-44 sm:left-20 sm:p-4 -top-8 sm:-top-40 w-full sm:w-full ' style={{ height: '150%'}}>
      <div className=" relative  sm:p-12 -left-20 sm:left-20 top-10 sm:top-20">
          <div className='flex sm:mt-0 mt-20 '>
            <p className=' text-base sm:text-lg font-medium text-green-400 font-montserrat'>02.  </p>
            <span className=' whitespace-nowrap text-lg sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Where I have worked</span>
            <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
          </div>
        <div className="container mx-auto sm:py-8">
          <div className="sm:flex sm:flex-wrap sm:-mx-4">
            <div className="md:w-1/6 ">
              <div className="bg-none hover:text-green-500 shadow-md text-base">
                <ul className="sm:flex sm:flex-col -mt-3 flex">{renderSettingsOptions()}</ul>
              </div>
            </div>
            <div className="sm:w-3/5 sm:px-4 px-1">
              <div className=" z-40 text-gray-400 sm:text-black sm:bg-white opacity-80 sm:shadow-md  sm:px-8 sm:py-6 sm:-ml-20 w-0.5rem sm:w-0.5rem h-0.28rem " style={{ }}>
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
