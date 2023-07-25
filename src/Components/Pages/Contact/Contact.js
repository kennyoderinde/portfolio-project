import React from 'react'

const Contact = () => {
  return (
    <div id="contactSection" className=' relative sm:relative sm:top-40 top-60 w-full h-screen sm:left-0 left-36'>
      <div className=' flex flex-col justify-center'>
        <div className=' text-white mt-32 text-center'>
          <p className=' text-3xl font-semibold font-montserrat leading-loose'>Contact</p>
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