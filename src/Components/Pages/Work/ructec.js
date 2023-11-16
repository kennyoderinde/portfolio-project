import React from 'react'
import GoldenCityPic from '../portfolioAssets/golden-city-proj.JPG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";


const ructec = () => {
  return (
    <div className=''>
      <div className=" w-full sm:p-12 -ml-20 md:-ml-20 lg:ml-0 mt-20 md:-mt-2">
          
      <div className='flex md:w-full md:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
        <a href='https://golden-city-experience-test.vercel.app/'>
          <img src={GoldenCityPic} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
        </a>
          </div>
          <div className=' h-full w-full  md:flex md:flex-col md:justify-center  flex flex-col justify-center items-center'>
               <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-montserrat text-lg sm:text-2xl  text-gray-400 font-normal  mt-6'>  </h2>
              </div>
              <p className='w-auto h-auto mx-auto flex items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 -mt-2 sm:mt-0 shadow-lg text-center'>An interactive web app, that connects homebuyers or people to real estate investors </p>


                <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/kennyoderinde/golden-city-experience-test'  target="_blank">< GithubIcons.FiGithub /></a></span>
                  <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://golden-city-experience-test.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
                </div>
            </div>
      </div>
    </div>
  )
}

export default ructec 