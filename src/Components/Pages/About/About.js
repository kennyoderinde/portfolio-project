import React, { useState } from 'react'
import * as TagIcons from "react-icons/ai";
import technologies from './AboutList';
import MyPics from '../portfolioAssets/my- pics1.png'


const About = () => {
  const [ devTools, setDevTool] = React.useState(technologies)

  return (
    <React.Fragment>
     
          
        <div id="aboutSection" className=' relative bg-[#041e3e] left-36 p-4 -mt-24 ' style={{width: "95%", height: '150%'}}>
          <div className='flex -space-x-80'>
            
            <div className='p-12 ml-14 mt-20 '>
              <div className=' flex '>
                <p className=' text-2xl font-medium text-green-400 font-montserrat'>01. <span className=' text-4xl text-gray-300 font-semibold font-montserrat ml-3'>About Me</span> </p>
                <div className=' ml-8 mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
              </div>
              

              <div className='grid space-y-10 '>

                <div className=' mt-6'  style={{ width: '50%', height: '28%'}}>
                  <p className=' font-montserrat font-medium text-lg text-gray-400 '
                  >Hello! My name is Kehinde and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I joined CodeLagos to learn website design — turns out hacking together a simple custom web page taught me a lot about WordPress, HTML & CSS!
                  </p>
                </div>

                <div className='-mt-10'  style={{ width: '56%', height: '28%'}}>
                  <p className='   font-montserrat font-medium text-lg text-gray-400 ' >
                  Fast-forward to today, and I’ve had the privilege of working as a mostly as a freelancer and learning at technology hubs; working on both tutors and student-led design projects. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                  </p>
                </div>

                <div className='-mt-10'  style={{ width: '56%', height: '28%'}}>
                  <p className='  font-montserrat font-medium text-lg text-gray-400 whitespace-normal'>
                  I also recently take time to guide and tutor newbies on the rudiments and also how to get started in tech. I also take to expose them to the basics skills HTML, CSS, Wordpress, they need to build a simple personalized web app.
                  </p>
                </div>
                <div className='-mt-10'  style={{ width: '56%', height: '8%'}}>
                  <p className='  font-montserrat font-medium text-lg text-gray-400 whitespace-normal'>
                  Here are a few technologies I’ve been working with recently:
                  </p>
                </div>
              </div>
            </div>
          
            <div className='  relative top-48 ml-16 right-56' style={{width: '40rem', height: '40rem'}}>
              <img src= {MyPics} alt= '' className=' w-fit' />
            </div>
         </div>

          <div className=' w-96 h-96 -mt-4 ml-10'>
            <ul className=' flex flex-wrap' style={{width: '30rem'}}>
              {
                devTools.map((item, index) => {
                  return (
                    <li 
                      className=''
                      id={window.location.pathname === item.link ? "active" : ""}
                      key={index}
                      onClick={() => {window.location.pathname = item.link}}
                    >
                      <div className=" w-60 h-10 flex space-x-4 p-1 ">
                        <div className=' sidebar-icon text-lg text-green-400 ml-16  '>{item.icon}</div>
                        <p className=' font-roboto font-normal text-lg text-gray-400 whitespace-nowrap -mt-1 hover:text-green-500  '>{item.title}</p>
                      </div>
                      
                    </li>
                  )
                })
              }
            </ul>
          </div>       
        </div>
        
   
    </React.Fragment>

  )}

  export default About 


   
        
   
