import React from 'react'
import Citrone from '../Work/Citrone'
import MyPortfolio from '../Work/MyPortfolio'
import HomezPage from '../Work/Homez'
import MiniProjects from './MiniProjects/MiniProjects'

import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'


const WorkPage = () => {
  return (
    <div id="workSection" className=' relative bg-[#020c1b] left-36 p-4 -mt-80 ' style={{width: "85%", height: '100%'}}>
      <Citrone />
      <MyPortfolio />
      <HomezPage />
      <MiniProjects />
    </div>
  )
}

export default WorkPage