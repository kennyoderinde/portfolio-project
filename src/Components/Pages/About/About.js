import React, { useState } from 'react'
import * as TagIcons from "react-icons/ai";
import technologies from './AboutList';
import MyPics from '../portfolioAssets/IMG_8200.jpeg'


const About = () => {
  const [ devTools, setDevTool] = React.useState(technologies)


  // flex-auto bg-[#020c1b] z-20 ml-10  sm:ml-20 sm:-mt-20  p-4

  return (
    <React.Fragment>
        <div id="aboutSection" className=' z-20 relative flex-auto bg-[#020c1b] left-38 sm:left-20 p-10 sm:p-4 sm:-top-20 -top-44 w-80 sm:w-full ' style={{ height: '150%'}}>
            <div className=' relative p-12 -ml-28 sm:ml-28 mt-0 '>
              <div className=' flex sm:mt-0 mt-20 '>
                <p className=' text-base sm:text-xl font-medium text-green-400 font-montserrat'>01.  </p>
                <span className=' text-2xl sm:text-2xl text-gray-300 font-semibold font-montserrat ml-3 whitespace-nowrap'>About Me</span>
                <div className='  mt-4 ml-6 sm:ml-8 sm:mt-6 border-t border-gray-500' style={{ width: '25rem' }}> </div>
              </div>
              
              <div className='grid space-y-6 sm:space-y-8 sm:w-60 '>

                <div className=' mt-6 w-0.5rem h-0.28rem sm:w-0.5rem'  style={{ }}>
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
                  Here are a few technologies I’ve been working with recently:
                  </p>
                </div>
              </div>
            </div>
          

          <div className='flex items-center sm:ml-36 sm:space-x-44 space-x-20 -mt-4 -ml-72 flex-col sm:flex sm:flex-row '>
            <div className=' sm:w-96 sm:h-96 -mt-0 -ml-52 sm:mt-0 sm:-ml-14'>
              <ul className=' -space-y-3 sm:space-y-1 sm:flex sm:flex-wrap  sm:w-30' style={{}}>
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

            <div className="z-40 sm:relative absolute -left-10 top-80 sm:-top-96 sm:left-80 hover:ml-8 hover:bg-green-500 hover:opacity-70 border-2 border-green-500 rounded-lg  sm:w-18 sm:h-18">
                <img src={MyPics} alt="" className="absolute hover:bg-green-500 hover:ml-8 hover:mt-8 top-80 left-40 sm:top-0 sm:left-0 transition-all duration-1000 delay-500 rounded-lg h-auto w-40 sm:w-full max-w-xs sm:max-w-full sm:h-auto" style={{  }} />
            </div>

          </div>      
        </div>
        
   
    </React.Fragment>

  )}

  export default About 


   
        
   
