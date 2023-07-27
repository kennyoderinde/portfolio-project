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
    title1: 'Prime Number  X  table',
    title2: 'React Form updated with hooks',
    devtools: 'React CSS Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    title1: 'Workers Review',
    title2: 'Restaurant menu list',
    devtools: 'React CSS Git'
  },
  {
    id: 3,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/todo-list-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    title1: 'A To-do List App',
    title2: '',
    devtools: 'React CSS Git'
  },
  {
    id: 4,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/calculator1')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    title1: 'Simple Calculator',
    title2: '',
    devtools: 'HTML CSS Javascript, Git'
  },
  {
    id: 5,
    icon1: <FaShirtsinbulk onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Frontend-Bootstrap-Project')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    title1: 'Front-end Bootstrap Project',
    title2: '',
    devtools: 'HTML Bootstrap Git'
  },
  {
    id: 6,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/api-data-table-display')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    title1: 'Meme Generator',
    title2: '',
    devtools: 'React CSS Git'
  },

  {
    id: 7,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/social-proof-page')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    title1: 'Social Proof Page',
    title2: '',
    devtools: 'HTML CSS Git' 
  },

  {
    id: 8,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/article-preview-design')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    title1: 'Article Preview Page',
    title2: '',
    devtools: 'HTML CSS Git'
  },
  
  {
    id: 9,
    icon1: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Group_Seven_Collaboration')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    title1: 'Collaboration project',
    title2: '',
    devtools: 'HTML CSS Git'
  },

  {
    id: 10,
    icon1: <FiCheckSquare onClick={() => handleClick('https://vercel.com/kennyoderinde/product-preview-card')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/product-preview-card')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://qr-code-project-five.vercel.app/')} />,
    title1: 'Product Preview Card',
    title2: 'QR Code design',
    devtools: 'HTML CSS Git'
  }
];

const handleClick = (url) => {
  window.open(url);
};

const ProjectList = () => {
  

  // <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center items-center flex flex-col justify-center items-center'>



    return (
        <React.Fragment>
        <div className=' sm:relative sm:top-20 mt-20 sm:w-12/12 w-full h-screen '  >
          <div className='grid -ml-32 sm:-ml-60'>
            <p className=' flex items-center justify-center text-gray-200 font-montserrat font-semibold sm:text-2xl text-xl whitespace-nowrap sm:mt-20'>Other Noteworthy Projects</p>
            <span className= 'flex flex-wrap items-center justify-center text-green-500 font-roboto font-normal sm:text-base whitespace-nowrap leading-10'>view the archive</span>
          </div>
          <div className=' w-full sm-60 h-60 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 -ml-12 sm:-mt-20 sm:p-20 sm:mr-20'>
            {projectsData.map((project) => (
              
              <div key={project.id}
                  className=' sm:h-72 border-2  h-60 inline-block card bg-gray-700  mr-6 mt-6 sm:mt-6 transition-all duration-1000 delay-200 hover:mt-4 hover:mr-4 shadow-inner shadow-green-500 rounded-md -space-y-4   '
              >
                
              
                    <div className=" flex items-center justify-center text-sm text-center font-medium text-gray-100 font-montserrat  mt-3 p-5 uppercase   ">{project.title1}</div>
                    <div className=" flex items-center justify-center text-sm text-center font-medium text-gray-100 font-montserrat sm:-mt -mt-3 p-5 uppercase  ">{project.title2}</div>
                    <div className=" flex items-center justify-center text-sm text-center font-light text-gray-300 font-roboto space-x-40  -mt-4 p-5  ">{project.devtools}</div>
                    <div className=' flex items-center justify-center sm:flex sm:items-center sm:justify-center space-x-8 '>
                      <div className=" w-10 h-8 bg-slate-800 rounded-lg   text-slate-100  hover:text-green-500 sm:flex sm:items-center sm:justify-center flex items-center justify-center text-base text-center ">{project.icon2}</div>
                      <div className=" w-10 h-8 bg-slate-800 rounded-lg   text-slate-100  hover:text-green-500 sm:flex sm:items-center sm:justify-center flex items-center justify-center text-base text-center ">{project.icon3}</div>
                    </div>
                
                </div>
            ))}
          </div>
        </div>
        </React.Fragment>
      )
    }

export default ProjectList


