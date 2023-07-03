import React from 'react'
import HomezPic from '../portfolioAssets/homez-app-store.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const CacClone = () => {
  return (
    <div className=''>
        <div className=" relative  sm:relative sm:p-12 -left-20 sm:left-6 top-20 sm:top-10">
          
        <div className='flex sm:-ml-36 sm:w-full sm:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
            <img src={HomezPic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
          <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center  flex flex-col justify-center items-center'>
               <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-montserrat text-lg sm:text-2xl  text-gray-400 font-normal  mt-6'>Homez Thrift App </h2>
              </div>
              <p className='flex justify-center items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 sm:p-3 -mt-2 sm:mt-0 shadow-lg'>A decluttering app for selling used items </p>


                <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/kennyoderinde/homez_thrift_app_project'  target="_blank">< GithubIcons.FiGithub /></a></span>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://homez-thrift-app-project.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
                </div>
            </div>
      </div>
    </div>
  )
}

export default CacClone