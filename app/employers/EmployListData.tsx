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


import { UseData } from "@/app/ContextApi/ContextApi";
import JobListSidebar from "./EmployListSidebar";


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

interface handleJobDataType{
  data:[]
}

interface recordDataType{
icons:String,
title:string,
url:String,
location:String;
openJob:number;
}


const EmployListData = ({data}:handleJobDataType) => {

  console.log(data,'🚈🚅🚅🚄🚄🚞🚞🛴🛴🚲🚲')
  if(!data){
    return(
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-black text-3xl">No Data</div>
    </div>)
  }
const [count,setCount]=useState(1)

const [itemPerPage,setitemPerPage]=useState(4)





// if(ArrayData===undefined) ArrayData=[];

const lastIndex=itemPerPage*count;//6
 const firstIndex=lastIndex-itemPerPage//6-6=0
const records:recordDataType[]=data.slice(firstIndex,lastIndex)

// let number =[];

//  if(data.length>0){
 const  number=[...Array(Math.ceil(data?.length/itemPerPage)).keys()].slice(1)
// }

const handleChangeItems=(value:string)=>{
 setitemPerPage(parseInt(value))
}


    
  return (
    <div className='w-full h-full flex flex-col items-center space-y-9 justify-center'>
      {/* Top Icons */}
      <div className='w-full flex flex-col space-y-3 items-start'>
          <div className='lg:hidden'> <JobListSidebar/></div> 
          <div className='flex flex-col  space-y-2  md:items-center md:space-y-0 md:flex-row md:justify-between w-full '>
          <div style={{fontWeight:100}} className={`${jost.className}`}>Showing {firstIndex} - {lastIndex<data.length? lastIndex :data.length} of {data.length} result</div>     
    
          
          </div>
           </div>
   
    {/* Body */}
    <div className='w-full grid grid-cols-1  space-y-5'>
       
       { data?.length>0 ?
       
       records.map((data,index:number)=> 
        
       <Link key={index} href={`employer/${data.url}`} className='w-full   border border-slate-200 rounded-md   group '>
        <div className=' flex flex-col md:flex-row items-start justify-start md:justify-between  space-y-2 p-5 md:p-8  h-full  '>
          <div className="flex items-center justify-center space-x-3">
         {/* //!  Image */}
          <div className=' h-full'><Image src={`/${data.icons}.jpg`} className="rounded-full" height={90} width={90} alt='Image/Logo' /></div>
         {/* //! Data */}
          <div className='flex flex-col space-y-3 items-start justify-between truncate    '>
          {/* Name*/}
           <div className={` ${jost.className} flex flex-col lg:flex-row items-start justify-start  w-full space-x-4 `}>
             <div className='text-xl  font-semibold text-[#28282b] 
             duration-500 truncate  lg:w-full hover:cursor-pointer '>{data.title}</div>  
           </div>
           {/*details  */}
           <div className='flex space-x-1  items-center  justify-start  sm:justify-center '>  <div><CiLocationOn  size={20} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.location}</div>  </div>
          {/* </div> */}
          </div>
        </div> 
        <div className={`${jost.className} text-xs duration-500 border rounded-xl px-5 py-1 bg-[#dde8f8] group-hover:bg-[#1967d2] group-hover:text-white`}>Open job -{`${data.openJob || 1}`} </div>
        </div>
        </Link>
        )
        
      :
      <div style={{fontWeight:400}} className={`${jost.className}  w-full flex items-center justify-center text-4xl`}>No Data</div>
      }
      
    
    <div className='min-w-full  flex items-center justify-center'>
  
        <div className="w-full flex items-center justify-center space-x-3">
       {data.length>0 && number.map((data,index)=>
      <div onClick={()=>setCount(data)} className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${data===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`} key={index}>
       {data}
    </div>
   )}
      </div>   
        </div>  
     
    </div>
    </div>
    
  )
}

export default EmployListData