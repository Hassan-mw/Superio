'use client'
import dynamic from "next/dynamic";
import { TfiTag } from "react-icons/tfi";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
import Image from 'next/image';
import { Jost } from 'next/font/google';
import Link from 'next/link';
import {useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UseData } from "@/app/ContextApi/ContextApi";
import JobListSidebar from "./JobListSidebar";


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

interface arrayDataType{
icon:string;
name:string;
field:String;
location:String;
minSalary:string;
maxSalary:string;
time:string;
url:string;
urgent:boolean
}

interface handleJobDataType{
  jobData:[]
}




const JobListData = ({jobData}:handleJobDataType) => {
  const [count,setCount]=useState(1)
const [job,setJob]=useState('')
const [itemPerPage,setitemPerPage]=useState(8)
const searchParams=useSearchParams()
const router=useRouter();
const pathName=usePathname();
const {search,handleSearchChange,location,handleLocationChange}=UseData()

let ArrayData:arrayDataType[];

ArrayData=jobData

if(search || location){
  if(search!==''){
  ArrayData = ArrayData?.filter(el => el.url.trim().toLowerCase().includes(search.trim().toLowerCase()))

  }else if(location!==''){ 
  ArrayData = ArrayData?.filter(el => el.location.trim().toLowerCase() === location.trim().toLowerCase() || el.url.trim().toLowerCase()===search.trim().toLowerCase() )
}
}
if(ArrayData===undefined) ArrayData=[];


const lastIndex=itemPerPage*count;//6
 const firstIndex=lastIndex-itemPerPage//6-6=0
const records=ArrayData.slice(firstIndex,lastIndex)

let number:number[] =[];

 if(ArrayData.length>0){
    number=[...Array(Math.ceil(ArrayData?.length/itemPerPage)).keys()].slice(1)
}

const handleChangeItems=(value:string)=>{
 setitemPerPage(parseInt(value))
}

function handleClearSearch(){
  handleSearchChange('')
  handleLocationChange('')
}

  return (
    <div className='w-full h-full flex flex-col items-center space-y-9 justify-center'>
      {/* Top Icons */}
      <div className='w-full flex flex-col space-y-3 items-start'>
          <div className='lg:hidden'> <JobListSidebar/></div> 
          <div className='flex flex-col  space-y-2  md:items-center md:space-y-0 md:flex-row md:justify-between w-full '>
            <div style={{fontWeight:100}} className={`${jost.className}`}>Showing {firstIndex} - {lastIndex<ArrayData.length? lastIndex :ArrayData.length} of {ArrayData.length} result</div>     
          
          </div>
          
         {(search!=='' || location!=='' )&&
         <div className={` w-full  rounded-sm bg-[#f5f7fc] flex items-center justify-between px-1 py-2`}>
        <div className="flex items-center justify-center gap-x-3">
         {search!=='' &&  <div onClick={()=>handleSearchChange('')} className={`${jost.className} hover:cursor-pointer hover:text-red-500 text-slate-700 px-3 py-1 rounded-sm flex items-center justify-center bg-[#eaeffa] text-xs gap-x-3`}> <span className="text-red-500">X</span> {search}</div>}
         {location!=='' && <div onClick={()=>handleLocationChange('')}  className={`${jost.className} hover:cursor-pointer text-slate-700 hover:text-red-500  px-3 py-1 rounded-sm flex items-center justify-center bg-[#eaeffa] text-xs  gap-x-3`}><span className="text-red-500">x</span> {location}</div>}
   
      
           </div>
          <div onClick={()=>handleClearSearch()} className={`${jost.className} text-red-500 text-xs pr-3 hover:cursor-pointer`}>Clear all</div>

          </div>
           }
           </div>
   
    {/* Body */}
    <div className='w-full grid grid-cols-1  space-y-5'>
        {
        ArrayData.length>0 ?
        records?.map((data,index:number)=>
       <Link href={`/job/${data.url}`} key={index}  className='w-full flex items-start justify-between  border border-slate-200 rounded-md   group '>
        <div className=' flex items-center -center space-x-4 p-5 h-full  '>
         {/* //!  Image */}
          <div className=' h-full'><Image src={`/${data.icon}.jpg`}  loading="lazy" height={50} width={50} alt='Image/Logo' /></div>
         {/* //! Data */}
          <div className='flex flex-col space-y-3 items-start justify-between truncate    '>
          {/* Name - Featuref */}
           <div className={` ${jost.className} flex flex-col lg:flex-row items-start justify-start  w-full space-x-4 `}>
             <div className='text-[14px] md:text-base font-semibold text-[#202124] group-hover:text-[#2d73d3]
             duration-500 truncate  lg:w-full hover:cursor-pointer '>{data.name}</div>  
             <div className='text-xs text-[#58b771]'>Featured</div>
           </div>
           {/*details  */}
          <div className='w-full  grid grid-cols-1 sm:grid-cols-3 items-start justify-start   text-[#696969]'>
          {/* <div className='flex md:flex-col lg:flex-row items-start justify-start  w-full space-x-4 md:space-x-0 lg:space-x-4 md:space-y-1 lg:space-y-0 ' > */}
           <div className='flex space-x-1  items-center  justify-start    '>  <div><IoBagHandleOutline size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.field}</div>  </div>
           <div className='flex space-x-1  items-center  justify-start  sm:justify-center '>  <div><CiLocationOn  size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.location}</div>  </div>
          {/* </div> */}
          <div className='flex space-x-1  items-center  justify-start  sm:justify-center  '>   <div><PiMoneyThin  size={12} /></div>    <div className={`${jost.className} text-xs `}>{`$ ${data.minSalary} - $${data.maxSalary} / month`}</div>  </div>
          </div>
          {/* Time */}
          <div className='flex items-start justify-start  w-full space-x-4'>
            <div className='px-4 py-1 rounded-3xl bg-[#dde8f8] text-[#3e8ada] text-xs hover:cursor-pointer '>{data.time}</div>
          { data.urgent && <div  className='px-4 py-1 rounded-3xl bg-[#fef2d9] text-[#f9ab54] text-xs'>{'Urgent'}</div>}
          </div>
          </div>
        </div>
        <div className='m-2 p-1 rounded-full text-slate-600 hover:bg-slate-200 hover:cursor-pointer'><TfiTag size={20} /></div>
        </Link>
        )
      :
      <div style={{fontWeight:400}} className={`${jost.className}  w-full flex items-center justify-center text-4xl`}>No Data</div>
      }
      
    </div>
    <div className='min-w-full  flex items-center justify-center'>
        {/* <div className='w-[230px] text-lg py-2 flex items-center hover:cursor-pointer justify-center duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2]  text-white rounded-lg '>Load More Listing</div> */}
        <div className="w-full flex items-center justify-center space-x-3">
      {ArrayData.length>0 && number.map((data,index)=>
      <div onClick={()=>setCount(data)} className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${data===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`} key={index}>
        {data}
      </div>
    )}
      </div>   
        </div>  
    
    </div>
  )
}

export default JobListData