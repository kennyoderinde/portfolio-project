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
            <span className="inline-block w-1 h-10 bg-green-500 ml-6"></span>
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
    <div id="experienceSection" className=' relative bg-[#020c1b] left-36 p-4 -mt-40 ' style={{width: "85%", height: '100%'}}>
      <div className=" relative p-12 ml-20 mt-20">
          <div className='flex '>
            <p className=' text-lg font-medium text-green-400 font-montserrat'>02. <span className=' text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Where I have worked</span> </p>
            <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
          </div>
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/6 ">
              <div className="bg-none hover:text-green-500 shadow-md text-base">
                <ul>{renderSettingsOptions()}</ul>
              </div>
            </div>
            <div className="md:w-3/5 px-4">
              <div className="bg-white shadow-md px-8 py-6" style={{ width: '50rem', height: '40rem'}}>
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
