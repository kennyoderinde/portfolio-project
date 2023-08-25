import React from 'react'
import {AiOutlineTag} from "react-icons/ai";


const Eelive = () => {
  return (
    <div className='  sm:z-30 ml-8 sm:ml-0'>
        <div className=' flex flex-col'>
            <p className=' text-base sm:text-xl sm:text-gray-500 font-semibold font-montserrat text-center'>Web Development Trainee </p>
            <span className=' text-green-500 text-xl font-montserrat text-center'> @ <a href='https://www.eelive.ng/'> Eelive.ng</a></span>
            <p className=' font-roboto font-normal sm:text-base sm:text-gray-500 text-center'>May 2018 - April 2020</p>
        </div>
        

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Researched news story information through trusted sources and verified facts before
            publishing. <br></br>
            <a href='https://www.eelive.ng/smithsonian-museum-acquires-victor-ekpuk-painting/' target="_blank" style={{color: 'green'}}>https://www.eelive.ng/smithsonian-museum-acquires-victor-ekpuk-painting/</a>
          
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Generated original story ideas for Big Stories, Showbiz, Arts, etc. Developed fresh
            perspectives;oversaw story development from inception to completion.
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-base p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Assisted in Interviews and recorded big-screen stars; artistes on wide-ranging topics in the
            entertainment industry. Wrote exciting, captivating; authentic pieces to engage audience members. Displayed
            energetic, confident; professional person when delivering news reports.
            </p>
        </div>                
    </div>
  )
}


export default Eelive