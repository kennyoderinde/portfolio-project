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
    title1: 'Prime Numbers Multiplication table',
    title2: 'React Form page updated with hook state',
    devtools: 'React, CSS, Git'
  },
  {
    id: 2,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/reviews-restaurant-react-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://reviews-restaurant-react-project.vercel.app/')} />,
    title1: 'Workers Review',
    title2: 'Itemizing a restaurant menu list',
    devtools: 'React, CSS, Git'
  },
  {
    id: 3,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/todo-list-project')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://todo-list-project-chi.vercel.app/')} />,
    title1: 'A To-do List App',
    title2: '',
    devtools: 'React, CSS, Git'
  },
  {
    id: 4,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/calculator1')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://calculator1-gold.vercel.app/')} />,
    title1: 'Simple Calculator',
    title2: '',
    devtools: 'HTML, CSS, Javascript, Git'
  },
  {
    id: 5,
    icon1: <FaShirtsinbulk onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Frontend-Bootstrap-Project')} />,
    icon3: <TbBrandVercel onClick={() => handleClick('  https://frontend-bootstrap-project.vercel.app/#')} />,
    title1: 'Front-end Bootstrap Project',
    title2: '',
    devtools: 'HTML, Bootstrap, Git'
  },
  {
    id: 6,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/api-data-table-display')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://router-assignment-two.vercel.app/')} />,
    title1: 'Meme Generator',
    title2: '',
    devtools: 'React, CSS, Git'
  },

  {
    id: 7,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/social-proof-page')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://social-proof-page.vercel.app/')} />,
    title1: 'Social Proof Page',
    title2: '',
    devtools: 'HTML, CSS, Git' 
  },

  {
    id: 8,
    icon1: <FaShirtsinbulk onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/article-preview-design')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://article-preview-design.vercel.app/')} />,
    title1: 'Article Preview Page',
    title2: '',
    devtools: 'HTML, CSS, Git'
  },
  
  {
    id: 9,
    icon1: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/Group_Seven_Collaboration')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://group-seven-zeta.vercel.app/')} />,
    title1: 'Collaboration project',
    title2: '',
    devtools: 'HTML, CSS, Git'
  },

  {
    id: 10,
    icon1: <FiCheckSquare onClick={() => handleClick('https://vercel.com/kennyoderinde/product-preview-card')} />,
    icon2: <FiGithub onClick={() => handleClick('https://github.com/kennyoderinde/product-preview-card')} />,
    icon3: <FiCheckSquare onClick={() => handleClick('https://qr-code-project-five.vercel.app/')} />,
    title1: 'Product Preview Card',
    title2: 'QR Code design',
    devtools: 'HTML, CSS, Git'
  }
];

const handleClick = (url) => {
  window.open(url);
};

const ProjectList = () => {
  

  // <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center items-center flex flex-col justify-center items-center'>



    return (
        <React.Fragment>
        <div className='sm:mt-10 '  >
          <div className='grid -ml-32 sm:-ml-60'>
            <p className=' flex items-center justify-center text-gray-200 font-montserrat font-semibold sm:text-2xl text-xl whitespace-nowrap mt-20'>Other Noteworthy Projects</p>
            <span className= 'flex flex-wrap items-center justify-center text-green-500 font-roboto font-normal sm:text-base whitespace-nowrap leading-10'>view the archive</span>
          </div>
          <div className=' sm:w-full sm:items-center sm:justify-center sm:flex sm:flex-wrap -ml-12 sm:-mt-20 sm:p-20 sm:mr-20'>
          {projectsData.map((project) => (
            
            <div key={project.id}
            className=' bg-gray-700 inline-block mr-6 mt-6 sm:mt-6 transition-all duration-1000 delay-200 hover:mt-4 hover:mr-4'
            style={{ width: '19rem', height: '19rem'}}
            >
              
              <div className='flex space-x-44 mt-6 p-6'>
                <div className="  text-3xl text-green-500  hover:text-white ">{project.icon1}</div>
                <div className=' flex space-x-6 ml-20'>
                  <div className="  text-xl text-slate-100  hover:text-green-500 ">{project.icon2}</div>
                  <div className="  text-xl text-slate-100  hover:text-green-500 ">{project.icon3}</div>
                </div>
                </div>
                <div className="  text-lg text-gray-100 font-montserrat font-normal -mt-3 p-5 ">{project.title1}</div>
                <div className="  text-lg text-gray-100 font-montserrat font-normal -mt-3 p-5 ">{project.title2}</div>
                <div className="  text-sm text-gray-300 font-roboto font-light -mt-4 p-5  ">{project.devtools}</div>
            </div>
          ))}
    </div>
          </div>
          {/* <div className=' w-20 h-20 flex items-center justify-center hover:ml-8 hover:bg-green-500 hover:opacity-70 border-2 border-green-500 rounded-lg'>
              <button type='button' className=' w-20 h-20 hover:bg-green-500 hover:ml-8 hover:mt-8 transition-all duration-1000 delay-500 rounded-lg' />
          </div> */}

        </React.Fragment>
      )
    }

export default ProjectList


