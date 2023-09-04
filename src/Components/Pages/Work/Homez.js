import React from 'react';
import { motion } from 'framer-motion';
import GoldenCityPic from '../portfolioAssets/golden-city-proj.JPG';
import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";

const CacClone = () => {
  return (
    <motion.div
      className=''
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full sm:p-12 -ml-20 md:-ml-20 lg:ml-0 mt-20 md:-mt-2">
        <div className='flex md:w-full md:flex sm:items-center sm:justify-center items-center justify-center mt-8'>
          <motion.img
            src={GoldenCityPic}
            alt='citrone-page'
            className='opacity-80 shadow-lg w-66'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className='h-full w-full  md:flex md:flex-col md:justify-center flex flex-col justify-center items-center'>
          <div className='flex items-center justify-center space-x-6'>
            <motion.h2
              className='whitespace-nowrap font-montserrat text-lg sm:text-2xl  text-gray-400 font-normal  mt-6'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Golden City
            </motion.h2>
          </div>
          <motion.p
            className='w-auto h-auto mx-auto flex items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 -mt-2 sm:mt-0 shadow-lg text-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            An interactive web app that connects homebuyers or people to real estate investors
          </motion.p>
          <div className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'>
            <motion.span
              className='text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href='https://github.com/kennyoderinde/golden-city-experience-test' target="_blank" rel="noopener noreferrer">
                <GithubIcons.FiGithub />
              </a>
            </motion.span>
            <motion.span
              className='text-lg sm:text-2xl font-medium hover:text-green-500  text-gray-200'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href='https://golden-city-experience-test.vercel.app/' target="_blank" rel="noopener noreferrer">
                <CheckoutIcon.FiCheckSquare />
              </a>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CacClone;
