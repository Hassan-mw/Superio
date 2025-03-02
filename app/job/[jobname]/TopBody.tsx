
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
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


interface filteredFeatureJobType {

 icon:string,
 name:string, 
 field:string,
 location:string,
 salery:string,
 time:string,
 urgent:boolean,
 expirationDate:String,
 maxSalary:String,
 minSalary:String,
 date:string,
}

const TopBody = ({name,date,location,field,salery,time,urgent,expirationDate,maxSalary,minSalary,icon}:filteredFeatureJobType) => {

    
  return (
    <div className='w-full h-full items-center justify-center flex '>
     <div className='w-full  max-w-screen-xl items-center justify-center flex flex-col space-y-3 md:space-y-9 border rounded-lg p-3'>

    
      <div className='flex flex-col w-full items-center justify-center space-y-3 md:flex-row md:justify-between'>
      <div className='flex flex-col items-center justify-center md:flex-row md:space-y-0 md:space-x-3 space-y-3'>
       <div ><Image height={60} width={60} alt='logo'  className='rounded-full' src={`/${icon}.jpg`}/></div>
       <div className='flex flex-col  items-center justify-center md:items-start space-y-1'>

      
       <div className={`${jost.className} text-[#202124] text-2xl`}>{name}</div>
      <div style={{fontWeight:400}} className={ `${jost.className} text-slate-500 text-sm`}>by <span className='text-black'>invision</span> in <span  className='text-black'> {field}</span></div>
      </div> 
      </div>
      <div className='flex flex-row space-x-3'>
       <div><TooltipProvider>
       <Tooltip>
           <TooltipTrigger className='hover p-2 duration-500 border border-white hover:border-slate-600 rounded-full'><LuCrown /></TooltipTrigger>
           <TooltipContent>
           <p>featured</p>
           </TooltipContent>
           </Tooltip>
           </TooltipProvider>
         </div>
       <div><TooltipProvider>
       <Tooltip>
           <TooltipTrigger className='hover p-2 duration-500 border border-white  hover:border-slate-600 rounded-full'><AiOutlineThunderbolt /></TooltipTrigger>
           <TooltipContent>
           <p>urgent</p>
           </TooltipContent>
           </Tooltip>
           </TooltipProvider>
         </div>
       <div><TooltipProvider>
       <Tooltip>
           <TooltipTrigger className='hover p-2 duration-500 border border-white  hover:border-slate-600 rounded-full'><IoPricetagOutline /></TooltipTrigger>
           <TooltipContent>
           <p>save</p>
           </TooltipContent>
           </Tooltip>
           </TooltipProvider>
         </div>
        
      </div>
      </div>
      <div className='min-w-full flex items-center justify-center md:justify-start'>
      <div className='w-full justify-start md:max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 '>
        <div style={{fontWeight:400}} className={`${jost.className} text-sm border px-3 py-1 bg-[#dde8f8] text-blue-600 rounded-2xl flex items-center justify-center`}>{time || 'Temporary'}</div>
        <div style={{fontWeight:400}} className={`${jost.className}   hover:cursor-pointer duration-500 hover:text-blue-400 text-sm border px-31 py-1 rounded-2xl flex items-center justify-center`}>{location }</div>
        <div style={{fontWeight:400}} className={`${jost.className}   text-sm border px-3 py-1 rounded-2xl flex items-center justify-center`}>{date}</div>
        <div style={{fontWeight:400}} className={`${jost.className}   text-sm border px-3 py-1 rounded-2xl flex items-center justify-center`}>{`${minSalary} $ - $ ${maxSalary}`}</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default TopBody