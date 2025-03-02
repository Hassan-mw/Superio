import React from 'react'
import FeatureJobArray from './FeatureJobArray'
import { Jost } from 'next/font/google'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const FeatureJob = () => {
  return (
    <div className='w-full flex items-center justify-center '>

    <div className='w-full h-full flex flex-col items-center space-y-14 p-7 max-w-screen-xl'>
    <div className='flex flex-col items-center justify-center space-y-3'>
     <div className={` ${jost.className} text-2xl font-semibold text-[#202124]`}>Featured Jobs</div>
     <div className='text-base text-[#798490]'>Know your worth and find the job that qualify your life</div>
    </div>
       <FeatureJobArray/>
 </div> 
 </div> 
  )
}

export default FeatureJob