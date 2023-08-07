import React from 'react'
import GoldenCityPic from '../portfolioAssets/golden-city-proj.JPG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const CacClone = () => {
  return (
    <div className=''>
        <div className=" relative  sm:relative sm:p-12 -left-20 sm:left-6 top-20 sm:top-20">
          
        <div className='flex sm:-ml-36 sm:w-full sm:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
            <img src={GoldenCityPic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </div>
          <div className=' h-40 sm:-ml-60 sm:flex sm:flex-col sm:justify-center  flex flex-col justify-center items-center'>
               <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-montserrat text-lg sm:text-2xl  text-gray-400 font-normal  mt-6'>Golden City  </h2>
              </div>
              <p className='flex justify-center items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 sm:p-3 -mt-2 sm:mt-0 shadow-lg'>An interactive web app, that connects homebuyers or people to real estate investors </p>


                <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/kennyoderinde/golden-city-experience-test'  target="_blank">< GithubIcons.FiGithub /></a></span>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://golden-city-experience-test.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
                </div>
            </div>
      </div>
    </div>
  )
}

export default CacClone 