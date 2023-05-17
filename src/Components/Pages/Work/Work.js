import React from 'react'
import Citrone from '../Work/Citrone'
import MyPortfolio from '../Work/MyPortfolio'
import HomezPage from '../Work/Homez'
import MiniProjects from './MiniProjects/MiniProjects'

import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'


const WorkPage = () => {
  return (
    <div id="workSection" className=' relative bg-[#020c1b] left-12 sm:left-28 sm:p-4 sm:-mt-64 w-full sm:w-full ' style={{ height: '150%'}}>
      <Citrone />
      <MyPortfolio />
      <HomezPage />
      <MiniProjects />
    </div>
  )
}

export default WorkPage