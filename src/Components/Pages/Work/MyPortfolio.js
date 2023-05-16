import React from 'react'
import PortfolioPic from '../portfolioAssets/portfoliio-page.PNG'

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";



const MyPortfolioPage = () => {
  return (
    <div className=''>
        <div className=" relative p-12 -mt-2">
          
          <div className='flex mt-6 -ml-20'>

          <div className=' relative h-40 grid justify-items-start p-3 left-20'>
                <p className=' font-roboto text-base text-green-500 font-medium'>Featured Project</p>
                <h2 className=' font-montserrat text-2xl  text-gray-300 font-bold leading-loose'>Portfolio </h2>
                <div className=' min-w-72 h-28 grid justify-center items-center bg-slate-700 font-montserrat font-medium text-sm text-slate-200 p-3 mt-6 shadow-cl'>
                    <p className=''>Citrone is a learning experience web application that makes it easy for educators to positively engage their learners
                    </p>
                </div>

                <div className='flex mt-3 space-x-8'>
                    <span className=' text-2xl font-medium hover:text-green-500  text-gray-200'>< GithubIcons.FiGithub /></span>
                    <span className=' text-2xl font-medium hover:text-green-500  text-gray-200'>< CheckoutIcon.FiCheckSquare /></span>
                    

                    
                </div>

            </div>
            <img src={PortfolioPic} alt='citrone-page' className=' mr-24 shadow-xl border-2 border-gray-200' style={{ width: '45%', minHeight: '40%', height: '45%'}}/>
            
          </div>
      </div>
    </div>
  )
}

export default MyPortfolioPage