import React from 'react'
import Citrone from '../Work/Citrone'
import CacClone from './CacClone'
import HomezPage from '../Work/Homez'
import MiniProjects from './MiniProjects/MiniProjects'
import KundaAdmin from '../Work/KundaAdmin'
import CitronePage from '../portfolioAssets/citrone-project-pic.PNG'
import ResumeWise from './ResumeWise'


const WorkPage = () => {
  return (
    <>
      

    <div id="workSection" className=' bg-[#020c1b] z-20 flex flex-col mx-auto w-full h-hull justify-center ml-44 ' style={{ height: '220%'}}>
      <KundaAdmin />
      <HomezPage />
      <Citrone />
       <CacClone />
      <ResumeWise />
      <MiniProjects />
    </div>
    </>
    
  )
}

export default WorkPage