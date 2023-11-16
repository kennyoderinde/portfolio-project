import React, { useState } from 'react'

import { FaShirtsinbulk } from 'react-icons/fa';
import { FiGithub, FiCheckSquare } from 'react-icons/fi';
import { TbBrandVercel } from "react-icons/tb";




const projectsData = [
  {
    id: 1,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    title1: (
      <div>
        <p>Prime Number  X  table</p>
        <p> ...     ...     ...</p>
        <div>Form updated with hooks</div>
      </div>

    ),
    devtools: 'React CSS Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    title1: (
      <div>
        <p> Workers Review</p>
        <p> ...     ...     ...</p>
        <p>Restaurant menu list</p>
      </div>
    ),

    devtools: 'React CSS Git'
  },
  {
    id: 3,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/todo-list-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    title1: 'A To-do List App',
    devtools: 'React CSS Git'
  },
  {
    id: 4,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/calculator1')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    title1: 'Simple Calculator',
    devtools: 'HTML CSS Javascript, Git'
  },
  {
    id: 5,
    icon1: <FaShirtsinbulk onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Frontend-Bootstrap-Project')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    title1: 'Front-end Bootstrap Project',
    devtools: 'HTML Bootstrap Git'
  },
  {
    id: 6,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/api-data-table-display')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    title1: 'Meme Generator',
    devtools: 'React CSS Git'
  },

  {
    id: 7,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/social-proof-page')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    title1: 'Social Proof Page',
    devtools: 'HTML CSS Git' 
  },

  {
    id: 8,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/article-preview-design')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    title1: 'Article Preview Page',
    devtools: 'HTML CSS Git'
  },
  
  {
    id: 9,
    icon1: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Group_Seven_Collaboration')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    title1: 'Collaboration project',
    devtools: 'HTML CSS Git'
  },

  {
    id: 10,
    icon1: <FiCheckSquare onClick={() => handleClick('https://vercel.com/kennyoderinde/product-preview-card')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/product-preview-card')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://qr-code-project-five.vercel.app/')} />,
    title1: (
      <div>
        <p> Product Preview Card</p>
        <p> ...     ...     ...</p>
        <p>QR Code design</p>
      </div>
    ),
    devtools: 'HTML CSS Git'
  }
];

const handleClick = (url) => {
  window.open(url);
};

const ProjectList = () => {
  
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 4);

  const toggleProjectsVisibility = () => {
    setShowAllProjects(!showAllProjects);
  };

    return (
        <React.Fragment>
          <div className='  mt-20 w-full h-screen flex flex-col mx-auto justify-start lg:-ml-0 md:-ml-20 -ml-20 '  >
            <div className='flex flex-col mx-auto '>
              <p className=' flex items-center justify-center text-gray-200 font-montserrat font-semibold sm:text-2xl text-xl whitespace-nowrap sm:mt-20'>Other Noteworthy Projects</p>
              <span className= 'flex items-center justify-center text-green-500 font-roboto font-normal sm:text-base whitespace-nowrap leading-10'>view the archive</span>
            </div>
            <div className=' w-full h-full grid gap-4 md:grid-cols-2 lg:grid-cols-4 sm:-mt-20 sm:p-20 mt-20 '>
              {visibleProjects.map((project) => (                
                <div key={project.id}
                    className=' sm:h-72 border-2  h-60 inline-block card bg-gray-700  mr-6 mt-6 sm:mt-6 transition-all duration-1000 delay-200 hover:mt-4 hover:mr-4 shadow-inner shadow-green-500 rounded-md -space-y-4   '
                >
                    <div className=" flex items-center justify-center text-sm text-center font-medium text-gray-100 font-montserrat  mt-3 p-5 uppercase w-auto h-20   ">{project.title1}</div>
                    <div className=" flex items-center justify-center text-sm text-center font-medium text-gray-100 font-montserrat sm:-mt -mt-3 p-5 uppercase  ">{project.title2}</div>
                    <div className=" flex items-center justify-center text-sm text-center font-light text-gray-300 font-roboto space-x-40  -mt-4 p-5 w-auto h-20  ">{project.devtools}</div>
                    <div className=' flex items-center justify-center sm:flex sm:items-center sm:justify-center space-x-8 w-auto h-20 '>
                      <div className=" w-10 h-8 bg-slate-800 rounded-lg   text-slate-100  hover:text-green-500 sm:flex sm:items-center sm:justify-center flex items-center justify-center text-base text-center ">{project.icon2}</div>
                      <div className=" w-10 h-8 bg-slate-800 rounded-lg   text-slate-100  hover:text-green-500 sm:flex sm:items-center sm:justify-center flex items-center justify-center text-base text-center ">{project.icon3}</div>
                    </div>
                  
                  </div>
              ))}
            </div>

            {!showAllProjects ? (
            <div className=' relative flex items-center justify-center lg:-top-80 md:-mt-10 sm:top-[180%]'>
              <button
                className='text-green-500 font-roboto font-normal text-base underline cursor-pointer'
                onClick={() => setShowAllProjects(true)}
              >
                View More
              </button>
            </div>
            ) : (
            <div className=' absolute flex items-center justify-center lg:left-60 lg:top-0 md:top-[55%] sm:mt-[700%]'>
              <button
                className='text-green-500 font-roboto font-normal text-base underline cursor-pointer'
                onClick={toggleProjectsVisibility}
              >
                View Less
              </button>
            </div>

          )}
          </div>
        </React.Fragment>
      )
    }

export default ProjectList


