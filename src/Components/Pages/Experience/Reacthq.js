import React from 'react'
import {AiOutlineTag} from "react-icons/ai";


const Reacthq = () => {
  return (
    <div className='  sm:z-30 ml-8 sm:ml-0'>
        <div className=' flex flex-col'>
            <p className=' text-base sm:text-xl sm:text-gray-500 font-semibold font-montserrat text-center'>Web Development Trainee </p>
            <span className=' text-green-500 text-xl font-montserrat text-center'>@ Reacthq</span>
            <p className=' font-roboto font-normal sm:text-base sm:text-gray-500 text-center'>November 2021 - April 2022</p>
        </div>
        

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
                Developed websites to work properly across Microsoft, Google, and Mozilla browsers. 
                Ability to create content that is unique,sharable, and thoughtful website with an SEO plugin that will help in search
                engines optimization and improved performances
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
                Adept in inbound marketing practice in business using podcast, videos, social media marketing, newsletters,
                content marketing, e-books, white papers.
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
                Social media ads account manager using tools like Facebook Business Suite, Google Analytics
            </p>
        </div>                
    </div>
  )
}


export default Reacthq