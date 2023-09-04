import React, { useState } from 'react'
import * as TagIcons from "react-icons/ai";
import technologies from './AboutList';
import "./About.css"


const About = () => {
  const [ devTools, setDevTool] = React.useState(technologies)


  // flex-auto bg-[#020c1b] z-20 ml-10  sm:ml-20 sm:-mt-20  p-4

  return (
    <React.Fragment>
        <div id="aboutSection" className=' z-20 flex-auto bg-[#020c1b] md:ml-0 lg:ml-40 md:-mt-20 md:p-12 lg:p-10 w-full md:w-full mx:auto ' style={{ height: '150%'}}>
            <div className=' md:p-20 lg:p-10 lg:-ml-14 md:ml-6 ml-20 md:w-auto '>
              <div className=' w-auto h-auto flex md:mt-10 mt-20 '>
                <p className=' text-base sm:text-xl font-medium text-green-400 font-montserrat'>01.  </p>
                <span className=' text-2xl sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3 whitespace-nowrap'>About Me</span>
                <div className='  mt-4 ml-6 sm:ml-8 sm:mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
              </div>
              
              <div className=' md:w-full md:h-full w-full h-full  grid space-y-6 lg:space-y-8 sm:w-60  '>

                <div className='  mt-6 md:w-full md:mx-auto h-0.28rem lg:w-full  '  style={{ }}>
                  <p className=' font-montserrat font-normal  text-sm sm:text-base text-gray-400 tracking-wide		'
                  >Hello! My name is Kehinde and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I joined CodeLagos to learn website design — turns out hacking together a simple custom web page taught me a lot about WordPress, HTML & CSS!
                  </p>
                </div>

                <div className='-mt-10 w-0.5rem h-0.28rem sm:w-0.5rem'  style={{ }}>
                  <p className='   font-montserrat font-normal text-sm sm:text-base text-gray-400 tracking-wide ' >
                  Fast-forward to today, and I’ve had the privilege of working mostly as a freelancer and learning at technology hubs; working on both tutors and student-led design projects. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                  </p>
                </div>

                <div className='-mt-10 w-0.5rem h-0.28rem sm:w-0.5rem'  style={{ }}>
                  <p className='  font-montserrat font-normal text-sm sm:text-base text-gray-400 whitespace-normal tracking-wide	'>
                  I also recently take time to guide and tutor newbies on the rudiments and also how to get started in tech. I also take time to expose them to the basics skills HTML, CSS, Wordpress, they need to build a simple personalized web app.
                  </p>
                </div>
                <div className=' sm:-mt-16 w-0.5rem h-0.28rem sm:w-0.5rem'  style={{}}>
                  <p className='  font-montserrat font-normal text-sm sm:text-base text-gray-400 whitespace-normal tracking-wide	'>
                  Technologies I use:
                  </p>
                </div>
              </div>
            </div>
          

          <div className='lg:space-x-24 space-x-20 mt-4 lg:-ml-32 md:-ml-0 '>
            <div className=' lg:w-auto sm:h-auto -mt-0 lg:ml-12 md:ml-6 ml-6'>
              <ul className=' -space-y-3 md:space-y-1 lg:flex md:flex md:flex-wrap grid grid-cols-2' style={{}}>
                {
                  devTools.map((item, index) => {
                    return (
                      <li 
                        className=''
                        id={window.location.href === item.link ? "active" : ""}
                        key={index}
                        onClick={() => {window.location.href = item.link}}
                      >
                        <div className=" w-60 h-10 flex sm:flex space-x-2  p-1 ">
                          <div className=' text-xs sm:text-base text-green-400 ml-16 '>{item.icon}</div>
                          <p className=' font-roboto font-normal text-xs sm:text-base text-gray-400 whitespace-nowrap -mt-1 sm:-mt-2 hover:text-green-500   '>{item.title}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div> 
                {/* spinning image */}
            <div class="container sm:relative absolute ">
              <div className="box md:-left-24 md:-top-56 lg:mt-32 -top-48 -left-16 ">
                <div class="spin-container">
                  <div class="shape">
                    <div class="bd"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>      
        </div>
        
   
    </React.Fragment>

  )}

  export default About 


   
        
   
