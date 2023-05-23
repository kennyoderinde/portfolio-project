import React from 'react'
import PortfolioPic from '../portfolioAssets/portfoliio-page.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const MyPortfolioPage = () => {
  return (
    <div className=''>
        <div className=" relative  sm:relative sm:p-12 -left-20 sm:left-6 top-20 sm:top-4">
          
          <div className='flex sm:-ml-36 sm:w-full sm:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
            <img src={PortfolioPic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
          <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center items-center flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-roboto text-lg sm:text-3xl  text-gray-400 font-bold  mt-6'>Portfolio </h2>
                <p className=' whitespace-nowrap mt-6 font-roboto text-xs sm:text-base text-green-500 font-medium'></p>
              </div>
              <p className='flex justify-center items-center font-roboto font-medium text-xs sm:text-lg text-green-500 p-4 sm:p-25 -mt-2 sm:mt-0 shadow-lg'>A compilation of web solutions that shows my skills, trainings and experiences</p>


              <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/kennyoderinde/portfolio-project'  target="_blank">< GithubIcons.FiGithub /></a></span>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://portfolio-project-h8i9-kennyoderinde.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
                </div>

          </div>
      </div>
    </div>
  )
}

export default MyPortfolioPage