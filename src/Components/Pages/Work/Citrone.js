import React from 'react'
import CitronePic from '../portfolioAssets/citrone-project-pic.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const CitronePage = () => {
  return (
    <div className=''>
        <div className=" relative p-12 ml-6 -mt-2">
          <div className='flex mt-20 '>
            <p className=' text-base font-medium text-green-400 font-montserrat'>03. <span className=' text-2xl text-gray-300 font-semibold font-montserrat ml-3'>Some Things I’ve Built</span> </p>
            <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem',  }}> </div>
          </div>
          <div className='flex mt-16'>
            <img src={CitronePic} alt='citrone-page' className=' shadow-lg' style={{ width: '45%', height: '40%'}}/>
            <div className=' relative h-40 grid justify-items-end p-3 right-20'>
                <p className=' font-roboto text-base text-green-500 font-medium'>Featured Project</p>
                <h2 className=' font-montserrat text-3xl  text-gray-300 font-bold leading-loose'>Citrone Redesign </h2>
                <div className=' min-w-72 h-28 grid justify-center items-center bg-gray-700 font-montserrat font-medium text-sm text-slate-200 p-3 mt-6 shadow-lg'>
                    <p className=''>Citrone is a learning experience web application that makes it easy for educators to positively engage their learners
                    </p>
                </div>

                <div className='flex mt-3 space-x-8'>
                    <span className=' text-2xl font-medium hover:text-green-500  text-gray-200'>< GithubIcons.FiGithub /></span>
                    <span className=' text-2xl font-medium hover:text-green-500  text-gray-200'>< CheckoutIcon.FiCheckSquare /></span>

                    
                </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default CitronePage