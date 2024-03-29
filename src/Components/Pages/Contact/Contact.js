import React from 'react'


import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";


const Contact = () => {

  const phoneNumber = '+234 817 5670 315';

  return (
    <div id="contactSection" className=' lg:mt-64 md:mt-[41rem] mt-[134rem] w-full h-screen md:ml-0 ml-24'>
      <div className=' flex flex-col sm:justify-center'>
        <div className=' text-white md:mt-28 mt-20 text-center '>
          <p className=' text-3xl font-semibold font-montserrat leading-loose'>Contact:</p>

          <div className='flex sm:justify-center sm:flex-row flex-col place-items-center sm:space-x-6 space-x-0 space-y-5 sm:space-y-0 sm:mb-8 mb-8'>
            <a href= {`tel: ${phoneNumber}`} className='z-20 flex justify-center whitespace-nowrap sm:space-x-4 space-x-3 p-1 sm:w-72 sm:h-10 w-72 h-10 bg-slate-300 rounded-xl font-semibold hover:bg-slate-500 items-center   '>
              < BsTelephoneForwardFill className='text-center items-center text-2xl text-gray-800'  />
              <p className='text-base text-gray-800 flex'>Call Me:</p>
              <span className=' text-base text-gray-800'>{phoneNumber}</span>
            </a> 
            <a href="mailto:kennyoderyndeh@gmail.com" className='z-20 flex justify-center p-1 space-x-2 sm:w-72 sm:h-10 w-72 h-10 bg-slate-300 rounded-xl font-semibold hover:bg-slate-500 items-center ' target="_blank" rel="noopener noreferrer">
              <MdOutlineAttachEmail className='text-center text-2xl text-gray-800' />
              <span className='text-base text-gray-800'>kennyoderyndeh@gmail.com</span>
            </a>

          </div>
          
          
          <p className=' font-montserrat leading-loose mb-5'>Submit the form to get in touch with me</p>
        </div>

        <div className=''>
          <form action='https://getform.io/f/cdbf2769-ff2c-47dc-ba95-159a6921e11d' method='POST'
                className=' flex flex-col items-center space-y-5 sm:mb-20 mb-[45rem]'>
            <input 
            type='text'
            name= 'name' 
            placeholder='Enter you name'
            className='font-montserrat sm:w-5/12 w-11/12 p-2 bg-transparent border-2 border-green-500 rounded-lg text-white focus:outline-none'
            />

            <input 
            type='text'
            name= 'email'
            placeholder='Enter you email'
            className='font-montserrat  sm:w-5/12 w-11/12 p-2 bg-transparent border-2 border-green-500 rounded-lg text-white focus:outline-none'
            />

            <textarea 
            name='message'
            rows= '6'
            placeholder='Enter you message'
            className=' font-montserrat sm:w-5/12 w-11/12  p-2 bg-transparent border-2 border-green-500 rounded-lg text-white focus:outline-none'
            >

            </textarea>

            <button class="relative w-40 px-6 py-3 font-bold text-white rounded-lg group top-6">            
              <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gray-500  ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-green-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span class="relative font-montserrat">Let's talk</span>
            </button>
  
          </form>
        </div>

        <footer className=" z-20 flex items-center flex-wrap backdrop-blur-lg justify-center bg-[#020c1b] p-4 md:space-x-36 w-full md:h-20 h-16 shadow-2xl shadow-green-500 md:ml-0 ml-0 md:mt-20 -mt-[33rem] md:mb-24 "  >
          <p className=' text-green-500 font-poppins font-normal text-xs text-center items-center'>© kennyoderyndeh 2023. All rights reserved</p>
        </footer>
      </div>


    </div>
  )
}

export default Contact

