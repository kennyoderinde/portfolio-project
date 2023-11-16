import React from 'react';
import { motion } from 'framer-motion';
import CitronePic from '../portfolioAssets/citrone-project-pic1.png';

import * as GithubIcons from "react-icons/fi";
import * as CheckoutIcon from "react-icons/fi";

const CitronePage = () => {
  return (
    <motion.div
      className=''
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full sm:p-12 -ml-20 md:-ml-20 lg:ml-0 mt-20 md:-mt-2">
       
        <div className=''>
          <a href='https://citrone-redesign-group-a.vercel.app/' className='flex md:w-full md:flex sm:items-center md:justify-center items-center justify-center mt-8'>
          <motion.img
            src={CitronePic}
            alt='citrone-page'
            className='opacity-80 shadow-lg w-66'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          </a>
        </div>
        <div className='h-full w-full md:flex md:flex-col md:justify-center items-center flex flex-col justify-center'>
          <motion.div
            className='flex items-center justify-center space-x-6 md:mt-5'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='whitespace-nowrap font-montserrat text-lg sm:text-2xl text-gray-400 font-normal'>
              Citrone Redesign
            </h2>
            <p className='whitespace-nowrap mt-6 font-montserrat text-xs sm:text-base text-gray-400 font-normal'>
              Featured Project
            </p>
          </motion.div>
          <motion.p
            className='w-auto h-auto mx-auto flex  items-center font-roboto font-normal text-xs sm:text-lg text-green-500 p-4 -mt-2 sm:mt-0 shadow-lg text-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A learning experience web application where educators can engage their learners
          </motion.p>
          <motion.div
            className='flex items-center justify-center -mt-2 space-x-8  sm:mt-0'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='cursor-pointer text-lg sm:text-2xl font-medium hover:text-green-500 text-gray-200'>
              <a href='https://github.com/ayomikun2018/citrone-redesign-groupA' target="_blank" rel="noopener noreferrer">
                <GithubIcons.FiGithub />
              </a>
            </span>
            <span className='text-lg sm:text-2xl font-medium hover:text-green-500 text-gray-200'>
              <a href='https://citrone-redesign-group-a.vercel.app/' target="_blank" rel="noopener noreferrer">
                <CheckoutIcon.FiCheckSquare />
              </a>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default CitronePage;
