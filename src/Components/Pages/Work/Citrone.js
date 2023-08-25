import React from 'react'
import CitronePic from '../portfolioAssets/citrone-project-pic1.png'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const CitronePage = () => {
  return (
    <div className=''>
        <div className=" w-full sm:p-12 -ml-20 md:-ml-20 lg:ml-0 mt-20 md:-mt-2">
          <div className='flex mt-20 md:mt-20 '>
            <p className=' text-base sm:text-xl font-medium text-green-400 font-montserrat'>03.  </p>
            <span className=' whitespace-nowrap text-lg sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Some Things I’ve Built</span>
            <div className=' ml-8 mt-6 border-t border-gray-500  lg:w-64 md:w-64 w-20' > </div>
          </div>
          <div className='flex md:w-full md:flex sm:items-center md:justify-center items-center justify-center mt-8'>
            <img src={CitronePic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
            <div className=' h-full w-full  md:flex md:flex-col md:justify-center items-center flex flex-col justify-center '>
              <div className='flex items-center justify-center space-x-6 md:mt-5'>
                <h2 className=' whitespace-nowrap font-montserrat text-lg sm:text-2xl text-gray-400 font-normal'>Citrone Redesign</h2>
                <p className=' whitespace-nowrap mt-6 font-montserrat text-xs sm:text-base text-gray-400 font-normal'>Featured Project</p>
              </div>
              <p className=' w-auto h-auto mx-auto flex  items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 -mt-2 sm:mt-0 shadow-lg text-center'>A learning experience web application where educators can engage their learners</p>


              <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                    <span className=' cursor-pointer text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/ayomikun2018/citrone-redesign-groupA'  target="_blank">< GithubIcons.FiGithub /></a></span>
                    <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://citrone-redesign-group-a.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
              </div>
            </div>
        </div>
      </div>
  )
}

export default CitronePage