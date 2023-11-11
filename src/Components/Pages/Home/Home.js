import React from 'react'
import { AiOutlineRight } from "react-icons/ai";



const Home = () => {
  return (
    <React.Fragment>                        
      <div id="homeSection" className=' flex-auto bg-[#020c1b] z-20 lg:ml-38 md:ml-20 md:-mt-20 py-4 px-5 md:px-20 md:py-20 w-full md:w-full ' style={{ height: '150%'}}>
        <div className='  mt-16 md:mt-28  px-1 flex flex-col lg:space-y-14  md:space-y-7 space-y-7 md:max-w-screen md:ml-0 ml-16'>
          <p className='  font-roboto font-medium text-lg md:text-xl text-green-400'>Hi, my name is</p>
          <h1 className='  font-montserrat font-bold whitespace-nowrap text-3xl lg:text-7xl md:text-5xl text-slate-300 '>Daniel Oderinde.</h1>
          <h1 className='  font-montserrat font-bold text-3xl leading-tight lg:text-7xl md:text-5xl text-gray-400 '>I build things for the web.</h1>

          <p className='   lg:pr-32 md:pr-6 pr-0 font-montserrat font-medium text-base text-gray-400 whitespace-normal md:tracking-wider leading-relaxed'>
            I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, learners centered solutions,  
          <a href='https://citrone-redesign-group-a.vercel.app/dashboard#' className=' text-xs sm:text-base text-green-400 font-montserrat ml-2'> Kunda-Kids Admin Dashboard, Citrone.</a>
          </p>
          <a href='#workSection'> <button type='button' className=' group w-52 md:w-64 px-4 py-4 sm:px-7  md:py-5 rounded-lg mb-36 md:mb-40 border border-green-400 
          flex items-center  mt-8 text-green-400 text-xs sm:text-base font-roboto font-normal whitespace-nowrap '> 
            Checkout my projects 
            <span className=' group-hover:rotate-90 duration-300 '>
              < AiOutlineRight size={25} className=" ml-2"/> 
            </span> 
          </button></a>

        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Home
