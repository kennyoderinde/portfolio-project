import React from 'react'


import { BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";


const Contact = () => {

  const phoneNumber = '+234 817 5670 315';

  return (
    <div id="contactSection" className=' relative sm:relative sm:top-40 top-[33rem] w-full h-screen sm:left-0 left-36'>
      <div className=' flex flex-col justify-center'>
        <div className=' text-white mt-32 text-center '>
          <p className=' text-3xl font-semibold font-montserrat leading-loose'>Contact:</p>

          <div className='sm:flex sm:justify-center justify-center sm:flex-row flex-col sm:space-x-6 space-x-0 space-y-5 sm:space-y-0'>
            <a href= {`tel: ${phoneNumber}`} className='z-40 flex justify-center whitespace-nowrap sm:space-x-2 p-1 sm:w-64 sm:h-10 w-64 h-10 bg-slate-300 rounded-xl font-semibold  '>
              < BsPhoneVibrate className='text-center items-center text-2xl text-gray-800'  />
              <p className='text-base text-gray-800 flex'>Call Me:</p>
              <span className=' text-base text-gray-800'>{phoneNumber}</span>
            </a> 
            <a href="email" className='z-40 flex justify-center p-1 space-x-2 sm:w-64 sm:h-10 w-64 h-10 bg-slate-300 rounded-xl font-semibold ' target="_blank" rel="noopener noreferrer">
              < MdOutlineAttachEmail className='text-center text-2xl text-gray-800'  />
              <span className=' text-base text-gray-800'>kennyoderyndeh@gmail.com</span>

            </a>
          </div>
          
          
          <p className=' font-montserrat leading-loose'>Submit the form to get in touch with me</p>
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
      </div>
    </div>
  )
}

export default Contact