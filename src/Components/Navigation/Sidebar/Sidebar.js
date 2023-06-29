// import React, { useState } from 'react'
// import  {AiFillGithub} from "react-icons/ai";
// import {AiFillLinkedin} from "react-icons/ai";
// import {SiMedium} from "react-icons/si";
// import {AiFillTwitterCircle} from "react-icons/ai";
// import {AiFillInstagram} from "react-icons/ai";
// // import sidebarData_ from "./SidebarData"

// const Sidebar = () => {

//   // const [items, setItems] = React.useState(sidebarData_)

//   const links = [
//     {
//       id:1,
//       child: (
//         <div className='flex space-x-6 -mt-6 -ml-6 p-2 text-sm'>
//         Github <AiFillGithub size={25} className='ml-6' />
//         </div>
//       ),
      
//       href: 'https://github.com/kennyoderinde',
//       style: 'rounded-tr-md'
//     },

//     {
//       id:2,
//       child: (
//         <div className='flex space-x-6 -mt-6 -ml-6 p-2 text-sm -mt-6m-'>
//         Linkedin <AiFillLinkedin size={25} className='ml-4' />
//         </div>
//       ),
      
//       href: 'https://www.linkedin.com/in/kehinde-oderinde-9ab81b16a/',
//       style: 'rounded-tr-md'
//     },

//     {
//       id:3,
//       child: (
//         <div className='flex space-x-6 -mt-6 -ml-6 p-2 text-sm'>
//         Medium <SiMedium size={25} className='ml-4' />
//         </div>
//       ),
      
//       href: 'https://medium.com/@kennyoderyndeh',
//       style: 'rounded-tr-md'
//     },

//     {
//       id:4,
//       child: (
//         <div className='flex space-x-6 -mt-6 -ml-6 p-2 text-sm'>
//         Twitter <AiFillTwitterCircle size={25} className='ml-6' />
//         </div>
//       ),
      
//       href: 'https://twitter.com/OderindeKehin16',
//       style: 'rounded-tr-md'
//     },

//     {
//       id:5,
//       child: (
//         <div className='flex space-x-6 -mt-6 -ml-9 p-2 text-sm'>
//         Instagram <AiFillInstagram  size={25} className='ml-3' />
//         </div>
//       ),
      
//       href: 'https://www.instagram.com/kordatech1/',
//       style: 'rounded-tr-md'
//     },
//   ]

//     return (
//         <React.Fragment>
//         <div className=' z-30 sm:z-30 bg-yellow-300 sm:w-32 absolute sm:fixed left-0 top-0' style={{ }}> 
//           <div className='mt-60'></div>
//           <ul className='  ' >
//           {
//             links.map(({ id, child, href, style}) => {
//               return ( 
//                 <li 
//                   className={' flex lg:flex flex-col group justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ' + " " + style}
//                   key={id}
//                 >
//                    <a href={href} 
//                    target='_blank'
//                    rel='noreferrer'
//                    className="sidebar-icon  text-xl text-white ml-10 sm:ml-12 mt-6 sm:mt-8 group-hover:text-green-500 "
//                    >
                    
//                     {child}
//                     </a>
                   
//                   </li>
//                 )
//               })
//             }
//             </ul>
//           </div>
//         </React.Fragment>
//       )
//     }

// export default Sidebar



import React, { useState } from 'react'
import  {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
// import sidebarData_ from "./SidebarData"

const Sidebar = () => {

  // const [items, setItems] = React.useState(sidebarData_)

  const links = [
    {
      id:1,
      child: (
        <div className='flex sm:space-x-6  sm:-mt-6 -mt-3 -ml-6 p-2 text-sm'>
        Github <AiFillGithub size={25} className='sm:ml-6 ml-14' />
        </div>
      ),
      
      href: 'https://github.com/kennyoderinde',
      style: 'rounded-tr-md'
    },

    {
      id:2,
      child: (
        <div className='flex space-x-6 sm:-mt-6 -mt-3 -ml-6 p-2 text-sm -mt-6m-'>
        Linkedin <AiFillLinkedin size={25} className='sm:ml-4 ml-12' />
        </div>
      ),
      
      href: 'https://www.linkedin.com/in/kehinde-oderinde-9ab81b16a/',
      style: 'rounded-tr-md'
    },

    {
      id:3,
      child: (
        <div className='flex space-x-6 sm:-mt-6 -mt-3 -ml-6 p-2 text-sm'>
        Medium <SiMedium size={25} className='sm:ml-4 ml-12' />
        </div>
      ),
      
      href: 'https://medium.com/@kennyoderyndeh',
      style: 'rounded-tr-md'
    },

    {
      id:4,
      child: (
        <div className='flex space-x-6 sm:-mt-6 -mt-3 -ml-6 p-2 text-sm'>
        Twitter <AiFillTwitterCircle size={25} className='sm:ml-6 ml-14' />
        </div>
      ),
      
      href: 'https://twitter.com/OderindeKehin16',
      style: 'rounded-tr-md'
    },

    {
      id:5,
      child: (
        <div className='flex space-x-6 sm:-mt-6 -mt-3 -ml-9 p-2 text-sm'>
        Instagram <AiFillInstagram  size={25} className='sm:ml-3 ml-12' />
        </div>
      ),
      
      href: 'https://www.instagram.com/kordatech1/',
      style: 'rounded-tr-md'
    },
  ]

    return (
        <React.Fragment>
        <div className=' z-30 sm:z-30 w-32 sm:w-32 fixed sm:fixed left-0 top-0 bg-[#020c1b]' style={{ height : '300vh'}}>
          <div className='mt-60'></div>
          <ul className='' >
          {
            links.map(({ id, child, href, style}) => {
              return (
                <li 
                  className={' flex lg:flex flex-col group justify-between items-center w-40 sm:mt-0 mt-5 sm:h-14 h-16 px-4 ml-[-100px] sm:hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ' + " " + style}
                  key={id}
                >
                   <a href={href} 
                   target='_blank'
                   rel='noreferrer'
                   className="sidebar-icon  text-xl text-white ml-4 sm:ml-12 mt-6 sm:mt-8 group-hover:text-green-500 "
                   >
                    
                    {child}
                    </a>
                   
                </li>
              )
            })
          }
          </ul>
          </div>
        </React.Fragment>
      )
    }

export default Sidebar
