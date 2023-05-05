import React from 'react'
import Citrone from '../Work/Citrone'
import MyPortfolio from '../Work/MyPortfolio'
import HomezPage from '../Work/Homez'

import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'


const WorkPage = () => {
  return (
    <div id="workSection" className=' relative bg-[#041e3e] left-36 p-4 -mt-80 ' style={{width: "85%", height: '100%'}}>
      <Citrone />
      <MyPortfolio />
      <HomezPage />
    </div>
  )
}

export default WorkPage