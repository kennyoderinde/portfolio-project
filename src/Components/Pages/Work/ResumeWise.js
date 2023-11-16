import React from 'react'
import CacClone from '../portfolioAssets/novo-landing-page.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const ResumeWise= () => {
  return (
    <div className=''>
        <div className=" w-full sm:p-12 -ml-20 md:-ml-20 mt-20 lg:ml-0 md:-mt-2">
          
        <div className=''>
          <a href='https://resumewise1.vercel.app/' className='flex md:w-full md:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
            <img src={CacClone} alt='citrone-page' className=' opacity-80 shadow-lg w-66' style={{ }}/>
          </a>
          </div>
          <div className=' h-full w-full  md:flex md:flex-col md:justify-center  flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center space-x-6'>
                <h2 className=' whitespace-nowrap font-montserrat text-lg sm:text-2xl  text-gray-400 font-normal mt-6'>Resume Wise </h2>
                <p className=' whitespace-nowrap mt-6 font-roboto text-xs sm:text-base text-green-500 font-normal '></p>
              </div>
              <p className='w-auto h-auto mx-auto flex items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 -mt-2 sm:mt-0 shadow-lg text-center'> A web app that generates awesome resume templates from job applicant insights.  </p>


              <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
                <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://github.com/kennyoderinde/resumewise1'  target="_blank">< GithubIcons.FiGithub /></a></span>
                <span className=' text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'><a href= 'https://resumewise1.vercel.app/'  target="_blank">< CheckoutIcon.FiCheckSquare /></a></span>  
            </div>

          </div>
      </div>
    </div>
  )
}

export default ResumeWise