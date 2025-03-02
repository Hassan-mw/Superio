import { Jost } from 'next/font/google';
import React from 'react'
// import TestimonialsArray from './TestimonialsArray'
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Download = () => {
  return (
    <div className='w-full flex items-center justify-center bg-white'>
    <div className='w-full  h-full flex flex-col items-center  px-5 py-8 space-y-14 lg:space-y-20  max-w-screen-xl'>
    
     <div className='w-full  flex items-center justify-start lg:space-x-14 '>
      {/* Image */}
     <div><img className='hidden lg:block h-[620px] w-[1500px]' src="/mobile.png"/></div>
     <div className='flex flex-col items-start justify-start space-y-6  w-full'>
     <div className={`${jost.className} text-2xl lg:text-4xl font-semibold text-[#202124]`}>Get the Superio Job Search App </div>
     <div style={{fontWeight:300}} className={`${jost.className} font-light text-sm text-[#798490] flex  `}>Search through millions of jobs and find the right fit. Simply swipe right to apply.</div>
      {/*Devices-Downlaods*/}
      <div className='flex items-start justify-start space-x-2'>
     <div className=' flex items-center justify-center space-x-3 w-[150px] py-1 hover:cursor-pointer  duration-500 bg-[#202124] hover:bg-[#1967d2] text:bg-white   text-white rounded-lg '>
        <div className='text-3xl'><FaApple /></div>
        <div className='flex flex-col items-start justify-start space-y-1 text-xs'>
            <div>Download on the</div>
            <div>Apple Store</div>
        </div>
        </div>
     <div className=' flex items-center justify-center space-x-3 w-[150px] py-1 hover:cursor-pointer  duration-500 bg-[#202124] hover:bg-[#1967d2] text:bg-white   text-white rounded-lg '>
        <div className='text-3xl'><FaGooglePlay size={25} /></div>
        <div className='flex flex-col items-start justify-start space-y-1 text-xs'>
            <div>Download on the</div>
            <div>Google Play</div>
        </div>
        </div>
       
      </div>
  
    </div>

        </div>  

         {/* Recruting CTA */}
    <div className='w-full flex items-center justify-between bg-[#eff3fc] px-8 py-8 lg:py-0 overflow-hidden rounded-md'>
    <div className='flex flex-col space-y-3 '>
    <div className={`${jost.className} text-2xl lg:text-4xl font-semibold text-[#202124]`}>Recruiting? </div>
    <div style={{fontWeight:300}} className={`${jost.className} font-light text-sm text-[#798490] flex  `}>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</div>
    <div className='w-[170px] text-lg py-3 flex items-center hover:cursor-pointer justify-center duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2]  text-white rounded-lg '>Start Recriting Now</div>
    </div>
    <div><img className='hidden lg:block h-60'  src="/mic.png" alt='Mic'/></div>
    </div>
 </div> 
 </div> 
  )
}

export default Download