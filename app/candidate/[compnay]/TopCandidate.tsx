
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LuCrown } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { StyledString } from 'next/dist/build/swc/types';
import { CiLocationOn } from 'react-icons/ci';
import { PiMoneyThin } from 'react-icons/pi';
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


interface filteredCandidateType {
candidateName:string,
category:string, 
salary:string,
location:string,
skills:[string],
icon:String
}

const TopCandidate = ({candidateName, category, location, icon,salary,skills}:filteredCandidateType) => {
// const TopCandidate = ({name,date,location,field,salery,time,urgent,expirationDate,maxSalary,minSalary,icon}:filteredFeatureJobType) => {

    
  return (
    <div className='w-full h-full items-center justify-center flex bg-[#f2f5fc]'>
     <div className='w-full  items-center justify-center flex flex-col space-y-3 p-14 rounded-lg '>

    
      <div className='flex flex-col w-full items-center justify-center space-y-3 '>
      <div className='flex flex-col items-center justify-center  space-y-3'>
       <div ><Image height={100} width={100} alt='logo'  className='rounded-full' src={`/${icon}.jpg`}/></div>
       <div className='flex flex-col  items-center justify-center  space-y-4'>

      
       <div className={`${jost.className} text-[#202124] text-2xl`}>{candidateName}</div>
       <div className={`${jost.className} text-xs border rounded-xl px-5 py-1   text-blue-500`}>{category}</div>

   <div className='w-full flex items-center justify-center space-x-3'>      
              <div className='flex space-x-1  items-center  justify-start  '>  <div><CiLocationOn  size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{location}</div>  </div>
             <div className='flex space-x-1  items-center  justify-start   '>   <div><PiMoneyThin  size={12} /></div>    <div className={`${jost.className} text-xs `}>{salary} / year</div>  </div>
  </div>
  <div className='w-full flex flex-col items-center justify-center md:flex-row gap-2  mx-14'>
   <div className='w-full flex items-center justify-center space-x-3'>      
   <div className='  py-3 px-6 rounded-md hover:bg-blue-700 text-md hover:cursor-pointer  bg-[#2c73d5] text-white duration-700'>Download CV</div>
   <div className=' py-3 px-6 rounded-md hover:bg-blue-700 text-md hover:cursor-pointer  bg-[#2c73d5] text-white duration-700'>Invite</div>
  </div>
   <div className='w-full flex items-center justify-center space-x-3'>    
    {skills.map((data,index)=>
       <div key={index}  className='px-4 py-1 rounded-3xl bg-[#d4e1f5] text-[#275cac] duration-500 hover:bg-black hover:text-white text-xs'>{data}</div>
    )}  
  </div>
      </div> 
      </div> 
      </div>
    
      </div>

    </div>
    </div>
  )
}

export default TopCandidate