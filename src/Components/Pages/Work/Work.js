import React from 'react'
import Citrone from '../Work/Citrone'
import MyPortfolio from '../Work/MyPortfolio'
import HomezPage from '../Work/Homez'
import MiniProjects from './MiniProjects/MiniProjects'

import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'


const WorkPage = () => {
  return (
    <div id="workSection" className=' relative bg-[#020c1b]  sm:-space-y-20 left-38 sm:left-40 -top-40 sm:-top-10 sm:p-4 sm:-mt-64 w-80 sm:w-full ' style={{ height: '150%'}}>
      <Citrone />
      <MyPortfolio />
      <HomezPage />
      <MiniProjects />
    </div>
  )
}

export default WorkPage