import React from 'react'
import {AiOutlineTag} from "react-icons/ai";


const Stutern = () => {
  return (
    <div className='  sm:z-30 ml-8 sm:ml-0'>
        <div className=' flex flex-col'>
            <p className=' text-base sm:text-xl sm:text-gray-500 font-semibold font-montserrat'>Frontend Developer Trainee </p>
            <span className=' text-green-500 text-xl font-montserrat'>@ Stutern</span>
            <p className=' font-roboto font-normal sm:text-base sm:text-gray-500'>May 2022 - May-2023</p>
        </div>
        

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Collaborated with other student designers and engineers on <span classname=" text-green-500 font-montserrat hover:text-green-500 font-medium text-base"><a href='https://citrone-redesign-group-a.vercel.app/' >Citrone </a></span> redesign project; a full fleshed scalable web application 
            to create new brands, design systems, and websites for organizations in and outside the community.
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Built several mini projects and also developed expertise in coding web, scalable applications. Sample of basic such as the, My Personal Portfolio, Prime Number Multiplication Table, a Review and Sliders, Menu item list, Add Event page etc.             
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Developed ability to think through problems and solve algorithmic challenges . Showcase competencies in problem-solving, and resolving disagreement. Executed projects  with advanced React best practices.            </p>
        </div>                
    </div>
  )
}


export default Stutern