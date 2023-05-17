import React from 'react'
import PortfolioPic from '../portfolioAssets/portfoliio-page.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const MyPortfolioPage = () => {
  return (
    <div className=''>
        <div className=" relative p-12 ml-6 -mt-2">
          
          <div className='flex items-center justify-center mt-8'>
            <img src={PortfolioPic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
          <div className=' h-40 flex flex-col justify-items-center'>
              <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-roboto text-lg sm:text-3xl  text-gray-400 font-bold  mt-6'>Citrone Redesign </h2>
              </div>
              <p className='flex justify-center items-center font-roboto font-medium text-xs sm:text-lg text-green-500 p-4 sm:p-3 -mt-2 sm:mt-0 shadow-lg'>A learning experience web application that makes it easy for educators to positively engage their learners</p>


                <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'>< GithubIcons.FiGithub /></span>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'>< CheckoutIcon.FiCheckSquare /></span>  
                </div>

            </div>
      </div>
    </div>
  )
}

export default MyPortfolioPage