'use client'
import { TfiTag } from "react-icons/tfi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
import Image from 'next/image';
import { Jost } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from "react";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { UseData } from "@/app/ContextApi/ContextApi";
import JobListSidebar from "./JobListSidebar";


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

interface handleJobDataType{
  candidateData:[]
}


const CandidateListData = ({candidateData}:handleJobDataType) => {
const [count,setCount]=useState(1)
const [itemPerPage,setitemPerPage]=useState(4)


const lastIndex=itemPerPage*count;//6
 const firstIndex=lastIndex-itemPerPage//6-6=0
const records=candidateData.slice(firstIndex,lastIndex)

let number:[] =[];

 if(candidateData.length>0){
    number=[...Array(Math.ceil(candidateData?.length/itemPerPage)).keys()].slice(1)
}


  return (
    <div className='w-full h-full flex flex-col items-center space-y-9 justify-center'>
      {/* Top Icons */}
      <div className='w-full flex flex-col space-y-3 items-start'>
          <div className='lg:hidden'> <JobListSidebar/></div> 
          <div className='flex flex-col  space-y-2  md:items-center md:space-y-0 md:flex-row md:justify-between w-full '>
            <div style={{fontWeight:100}} className={`${jost.className}`}>Showing {firstIndex} - {lastIndex<candidateData.length? lastIndex :candidateData.length} of {candidateData.length} result</div>       
          </div>
           </div>
   
    {/* Body */}
    <div className='w-full grid grid-cols-1  space-y-5'>
        {
        candidateData.length>0 ?
        records?.map((data,index)=>
       <Link href={`/candidate/${data.url}`} key={index}  className='w-full p-2 flex items-start justify-between  border border-slate-200 rounded-md   group '>
        <div className=' flex items-center -center space-x-4 p-3 h-full  '>
         {/* //!  Image */}
          <div className=' h-full'><Image src={`/${data.icon}.jpg`} className="rounded-full"  height={90} width={90} alt='Image/Logo' /></div>
         {/* //! Data */}
          <div className='flex flex-col space-y-3 items-start justify-between truncate    '>
          {/* Name - Featuref */}
           <div className={` ${jost.className} flex  items-center justify-start  w-full space-x-4 `}>
             <div className='text-[14px] md:text-base font-semibold text-[#202124] group-hover:text-[#2d73d3]
             duration-500 truncate  hover:cursor-pointer '>{data.candidateName}</div>  
             <div className='text-xs text-[#58b771]'>Featured</div>
           </div>
           {/*details  */}
          <div className='w-full  grid grid-cols-1 sm:grid-cols-3 items-center justify-start md:gap-x-1  text-[#696969]'>
          {/* <div className='flex md:flex-col lg:flex-row items-start justify-start  w-full space-x-4 md:space-x-0 lg:space-x-4 md:space-y-1 lg:space-y-0 ' > */}
           <div className='flex space-x-1  items-center  justify-start  '>    <div className={`${jost.className} text-blue-500   text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.category}</div>  </div>
           <div className='flex space-x-1  items-center  justify-start  '>  <div><CiLocationOn  size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.location}</div>  </div>
          <div className='flex space-x-1  items-center  justify-start   '>   <div><PiMoneyThin  size={12} /></div>    <div className={`${jost.className} text-sm `}>{`$ ${data.salary} / year`}</div>  </div>
          </div>
          {/* Time */}
          <div className='flex items-start justify-start  w-full space-x-4'>
            {
              data.skills.map((skill:String,num:Number)=>
         <div key={num}  className='px-4 py-1 rounded-3xl bg-[#f0f5f7] text-[#aa9e96] duration-500 hover:bg-black hover:text-white text-xs'>{skill}</div>
              
              )
            }
         {/* <div  className='px-4 py-1 rounded-3xl bg-[#f0f5f7] text-[#aa9e96] duration-500 hover:bg-black hover:text-white text-xs'>App</div>
         <div  className='px-4 py-1 rounded-3xl bg-[#f0f5f7] text-[#aa9e96] duration-500 hover:bg-black hover:text-white text-xs'>Job</div> */}
          </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
        <div className='m-2 p-1 rounded-full text-slate-600 hover:bg-slate-200 hover:cursor-pointer'><TfiTag size={20} /></div>
        <div className={`${jost.className} p-2 rounded-md bg-[#f0f5f7] text-blue-600 group-hover:bg-blue-600 group-hover:text-white duration-500 text-xs`}>View Profile</div>
        </div>
        </Link>
        )
      :
      <div style={{fontWeight:400}} className={`${jost.className}  w-full flex items-center justify-center text-4xl`}>No Data</div>
      }
      
    </div>
    <div className='min-w-full  flex items-center justify-center'>
        {/* <div className='w-[230px] text-lg py-2 flex items-center hover:cursor-pointer justify-center duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2]  text-white rounded-lg '>Load More Listing</div> */}
        <div className="w-full flex items-center justify-center space-x-3">
      {candidateData.length>0 && number.map((data,index)=>
      <div onClick={()=>setCount(data)} className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${data===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`} key={index}>
        {data}
      </div>
    )}
      </div>   
        </div>  
    
    </div>
  )
}

export default CandidateListData