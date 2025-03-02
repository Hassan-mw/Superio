
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

const TopCompant = ({openJob,title,icons}:{openJob:Number,title:String,icons:String}) => {
// const TopCompant = ({name,date,location,field,salery,time,urgent,expirationDate,maxSalary,minSalary,icon}:filteredFeatureJobType) => {

    
  return (
    <div className='w-full h-full items-center justify-center flex bg-[#f2f5fc]'>
     <div className='w-full  max-w-screen-xl items-center justify-center flex flex-col space-y-3 p-14 rounded-lg '>

    
      <div className='flex flex-col w-full items-center justify-center space-y-3 '>
      <div className='flex flex-col items-center justify-center  space-y-3'>
       <div ><Image height={100} width={100} alt='logo'  className='rounded-lg' src={`/${icons}.jpg`}/></div>
       <div className='flex flex-col  items-center justify-center  space-y-1'>

      
       <div className={`${jost.className} text-[#202124] text-2xl`}>{title}</div>
       <div className={`${jost.className} text-xs duration-500 border rounded-xl px-5 py-1 bg-[#dde8f8]  text-blue-500`}>{`Open job - ${openJob}`} </div>

      </div> 
      </div>
    
      </div>

    </div>
    </div>
  )
}

export default TopCompant