import React from 'react'
import CitronePic from '../portfolioAssets/citrone-project-pic1.png'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const CitronePage = () => {
  return (
    <div className=''>
        <div className=" relative  sm:relative sm:p-12 -left-20 sm:left-6 top-20 sm:-top-2">
          <div className='flex mt-20 sm:mt-20 '>
            <p className=' text-base sm:text-xl font-medium text-green-400 font-montserrat'>03.  </p>
            <span className=' whitespace-nowrap text-lg sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Some Things I’ve Built</span>
            <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem',  }}> </div>
          </div>
          <div className='flex sm:-ml-36 sm:w-full sm:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
            <img src={CitronePic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
            <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center items-center flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-roboto text-lg sm:text-3xl text-gray-400 font-bold  mt-6'>Citrone Redesign</h2>
                <p className=' whitespace-nowrap mt-6 font-roboto text-xs sm:text-base text-green-500 font-medium'>Featured Project</p>
              </div>
              <p className='flex justify-center items-center font-roboto font-medium text-xs sm:text-lg text-green-500 p-4 sm:px-25 -mt-2 sm:mt-0 shadow-lg'>A learning experience web application where educators can engage their learners</p>


              <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/ayomikun2018/citrone-redesign-groupA'  target="_blank">< GithubIcons.FiGithub /></a></span>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://citrone-redesign-group-a.vercel.app/dashboard#'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
                </div>

            </div>
        </div>
      </div>
  )
}

export default CitronePage