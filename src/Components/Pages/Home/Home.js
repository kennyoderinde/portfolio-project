import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

// import About from '../About/About'
// import Experience from '../Experience/Experience'

const Home = () => {
  return (
    <React.Fragment>                        
      <div id="homeSection" className=' relative sm:relative flex-auto bg-[#020c1b] z-40 left-38 sm:-top-20 p-12 sm:p-20 w-80 sm:w-full ' style={{ height: '150%'}}>
        <div className=' relative -left-20 sm:left-10 mt-28 sm:mt-28  px-1 md:flex-row max-w-screen'>
          <p className=' mr-10 font-roboto font-medium text-lg sm:text-xl text-green-400'>Hi, my name is</p>
          <h1 className=' mr-10 font-montserrat font-bold whitespace-nowrap text-5xl sm:text-7xl text-slate-300 mt-4 sm:mt-10'>Kehinde Oderinde.</h1>
          <h1 className=' mr-10 font-montserrat font-bold text-5xl leading-tight sm:text-7xl text-gray-400 mt-4 sm:mt-8'>I build things for the web.</h1>

          <p className=' mt-4 sm:mt-12 sm:pr-32 font-montserrat font-medium text-base sm:text-base text-gray-400 whitespace-normal tracking-wider' style={{ width: '85%', height: '25%'}}>
            I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, learners centered solution,  
          <a href='https://citrone-redesign-group-a.vercel.app/dashboard#' className=' text-xs sm:text-base text-green-400 font-montserrat ml-2'>Citrone.</a>
          </p>
          <a href='#workSection'> <button type='button' className=' group w-52 sm:w-64 px-4 py-4 sm:px-7  sm:py-5 rounded-lg mb-36 sm:mb-40 border border-green-400 
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
