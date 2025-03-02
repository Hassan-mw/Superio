
import SideBar from '@/app/(components)/SideBar/SideBar'
import React from 'react'
import { Jost } from 'next/font/google'

import jobCategoryArrays from '@/app/Array/job-category'
import { rawListeners } from 'process'
import Login from './Login'
import Register from './Register'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page =async () => {


  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Login/Register</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Login/Register</span></div>
      </div>
      <div  className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:space-x-10 p-3  max-w-screen-xl">
    
        <Login/>
        <Register/>
      
         </div>

     </div>
  )
}

export default page