import React from 'react'
import PopularJobs from './PopularJobArray'
import { Jost } from 'next/font/google'

const jost=Jost({
  weight:['400','600'],
  subsets:['latin']
})

const PopularJob = () => {
  return (
    <div className='w-full flex items-center justify-center '>
    <div className='w-full h-full flex flex-col items-center space-y-16 p-7 max-w-screen-xl'>
       <div className='flex flex-col items-center justify-center space-y-3'>
        <div className={` ${jost.className} text-xl lg:text-3xl font-bold text-[#202124] pt-6`}>Popular Job Categoryies</div>
        <div className={` ${jost.className} text-base text-[#798490]`}>2020 jobs live 293 added today.</div>
       </div>
       <PopularJobs/>
    </div> 
    </div> 
  )
}

export default PopularJob