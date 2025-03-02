'use client';
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoBagHandleOutline } from 'react-icons/io5'
import { PiMoneyThin } from 'react-icons/pi'
import { TfiTag } from 'react-icons/tfi'


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

interface branchDatType{
  branch:[{
    url:String,
    icon:String,
    name:String,
    field:String,
    location:String,
    minSalary:String,
    maxSalary:String
  }]
}

const MiddleJobListData = ({branch}:branchDatType) => {

  return (
    <div className='w-full grid grid-cols-1  space-y-5'>
    {
    branch.length>0 ?
    branch.map((data,index)=>
   <Link href={`/job/${data.url}`} key={index}  className='w-full flex items-start justify-between  border border-slate-200 rounded-md   group '>
    <div className=' flex items-center -center space-x-4 p-5 h-full  '>
     {/* //!  Image */}
      <div className=' h-full'><img src={`/${data.icon}.jpg`}  className='h-16 w-16  rounded-full' alt='Image/Logo' /></div>
     {/* //! Data */}
      <div className='flex flex-col space-y-3 items-start justify-between truncate    '>
      {/* Name - Featuref */}
       <div className={` ${jost.className} flex flex-col lg:flex-row items-start justify-start  w-full space-x-4 `}>
         <div className='text-md font-semibold text-[#202124] group-hover:text-[#2d73d3]
         duration-500 truncate   hover:cursor-pointer '>{data.name}</div>  
       </div>
       {/*details  */}
      <div className='w-full  grid  grid-cols-3 items-center space-x-3 justify-start   text-[#696969]'>
      {/* <div className='flex md:flex-col lg:flex-row items-start justify-start  w-full space-x-4 md:space-x-0 lg:space-x-4 md:space-y-1 lg:space-y-0 ' > */}
       <div className='flex space-x-1  items-center  justify-start    '>  <div><IoBagHandleOutline size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.field}</div>  </div>
       <div className='flex space-x-1  items-center  justify-start  sm:justify-center '>  <div><CiLocationOn  size={12} /></div>    <div className={`${jost.className} text-sm  hover:cursor-pointer hover:text-[#202124]`}>{data.location}</div>  </div>
      {/* </div> */}
      <div className='flex space-x-1  items-center  justify-start  sm:justify-center  '>   <div><PiMoneyThin  size={12} /></div>    <div className={`${jost.className} text-xs `}>{`${data.minSalary} $ -  $ ${data.maxSalary}`}</div>  </div>
      </div>
      </div>
    </div>
    <div className='m-2 p-1 rounded-full text-slate-600 hover:bg-slate-200 hover:cursor-pointer'><TfiTag size={20} /></div>
    </Link>
    )
  :
  <div style={{fontWeight:400}} className={`${jost.className}  w-full flex items-center justify-center text-4xl`}>No Jobs</div>
  }
  
</div>
  )
}

export default MiddleJobListData