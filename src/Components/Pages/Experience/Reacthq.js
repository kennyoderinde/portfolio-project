import React from 'react'
import {AiOutlineTag} from "react-icons/ai";


const Stutern = () => {
  return (
    <div className=''>
        <div className=''>
            <p className=' text-lg text-gray-400 font-semibold font-montserrat'>Website design Intern <span className=' text-green-500 text-lg font-montserrat'>@ Reacthq</span></p>
            <p className=' font-roboto font-normal text-base text-gray-500'>Sept 2021 - March 2022
</p>
        </div>
        <div></div>
        <div className='flex mt-1'>
            <span className=' text-lg p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Built websites to work properly across browsers with WordPress. Tested and reviewed  WordPress libraries, packages  such as Elementor, WP Bakery, Visual  etc
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-lg p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Developed ability to add extra-functionality to websites with plugins and widgets. Created custom fields. Executed projects with customizers and used page builders features.  
            </p>
        </div>

        <div className='flex mt-3'>
            <span className=' text-lg p-1 mt-4 text-green-500'><AiOutlineTag /></span>
            <p className='p-4 text-base font-montserrat font-medium '>
            Actively participated and contribute in capstone project and demo day presentations. Earned certificate of excellence in recognition of excellent perfomance at the 2021 ReactHQ Sprint Demo Day.
            </p>
        </div>  

  
    </div>
  )
}

export default Stutern