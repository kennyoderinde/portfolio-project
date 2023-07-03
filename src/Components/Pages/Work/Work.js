import React from 'react'
import Citrone from '../Work/Citrone'
import CacClone from './CacClone'
import HomezPage from '../Work/Homez'
import MiniProjects from './MiniProjects/MiniProjects'

import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'
import ResumeWise from './ResumeWise'


const WorkPage = () => {
  return (
    <div id="workSection" className=' relative bg-[#020c1b] z-40  sm:-space-y-20 left-38 sm:left-40 -top-52 sm:-top-10 sm:p-4 sm:-mt-64 w-80 sm:w-full ' style={{ height: '220%'}}>
      <Citrone />
      <CacClone />
      <ResumeWise />
      <HomezPage />
      <MiniProjects />
    </div>
  )
}

export default WorkPage