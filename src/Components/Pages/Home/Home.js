import React from 'react'
// import About from '../About/About'
// import Experience from '../Experience/Experience'

const Home = () => {
  return (
    <React.Fragment>
      <div id="homeSection" className=' relative bg-[#041e3e] ml-20 -mt-28 left-16 p-4 ' style={{width: "90%", height: '150%'}}>
        <div className='ml-12 mt-28'>
          <p className=' font-roboto font-medium text-lg text-green-400'>Hi, my name is</p>
          <h1 className=' font-montserrat font-bold text-5xl text-slate-300 mt-10'>Kehinde Oderinde.</h1>
          <h1 className=' font-montserrat font-bold text-5xl text-slate-400 mt-8'>I build things for the web..</h1>

          <p className=' mt-12 pr-6 font-montserrat font-medium text-base text-gray-400 whitespace-normal' style={{ width: '50%', height: '20%'}}>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, learners centered solution,  
          <a href='#' className=' text-lg text-green-400 font-montserrat ml-2'>Citrone.</a>
          </p>
7
          <p className=' w-72 px-7 py-5 rounded-lg mb-28 border-2 border-green-400 mt-12 text-green-400 text-base font-roboto font-medium whitespace-nowrap '><a href= ''>Check out my course!</a></p>

        </div>

       
       
        
      </div>
    </React.Fragment>
  )
}

export default Home