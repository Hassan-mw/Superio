'use client'
import React, { useState, useEffect, useContext } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Jost } from 'next/font/google'
import { IoLocationOutline } from 'react-icons/io5'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import Link from 'next/link'
import { DataContext, DataProvider } from '@/app/ContextApi/ContextApi'
import { MdOutlineMail } from 'react-icons/md'
import { LuFileUp } from 'react-icons/lu'
import { GoInbox } from 'react-icons/go'
import { FaUserGraduate } from 'react-icons/fa'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const HomeData = () => { 
   const words = [
          {
            text: "There ",
            className:'z-10 text-2xl  m-md:text-3xl lg-xl:text-4xl xl:text-5xl'
          },
          {
            text: "  Are ",
            className:'m-md:text-3xl lg-xl:text-4xl xl:text-5xl'
          },
          {
            text: "93,178.",
            className: "text-blue-500 dark:text-blue-500 m-md:text-3xl lg-xl:text-4xl xl:text-5xl",
          },
          {
            text: "Postings ",
            className:'m-md:text-3xl lg-xl:text-4xl xl:text-5xl'

          },
          {
            text: "Here",
            className:'m-md:text-3xl lg-xl:text-4xl xl:text-5xl'

          },
          {
            text: "For ",
            className:'m-md:text-3xl lg-xl:text-4xl xl:text-5xl'

          },
          {
            text: " You!",
            className:'m-md:text-3xl lg-xl:text-4xl xl:text-5xl'

          },
          
        ];

     const [jobSearch, setJobSearch] = useState('')
    const [locationSearch, setLocationSearch] = useState('')
      
    
const {handleSearchChange,handleLocationChange}=useContext(DataContext)

   useEffect(()=>{
    handleSearchChange(jobSearch)
   },[jobSearch])

   useEffect(()=>{
    handleLocationChange(locationSearch)
   },[locationSearch])


  return (
    // <div className='w-full flex items-center justify-center '>

    <div className='w-full h-full   flex flex-col items-start   space-y-5 lg:space-y-8  lg:max-w-[700px]'>
    <div className='w-full flex flex-col space-y-3 items-start'>

      <TypewriterEffect className={` ${jost.className}  font-bold -z-50` }   words={words} />
           {/* <div className={` ${jost.className} text-[#202124] text-2xl   flex flex-col space-y-4 md:space-y-0  md:space-x-4 mt-10 `}>
            
           </div> */}


     {/* <div className={` ${jost.className} text-[#202124] text-2xl  xl:text-5xl m-2xl:text-5xl`} > There Are <span className='text-[#578fdd]'>93,178</span> Postings Here For you! </div> */}
     <div className={` ${jost.className} text-[#7b8793] text-base `}>Find Jobs, Employment & Career Opportunities</div>
    </div>
     {/* Job finder input */}
        
                 <div className='grid grid-cols-1 m-md:grid-cols-3 place-items-center w-full bg-white rounded-lg p-4  space-y-5 m-md:space-y-0  border-slate-200 border'>
               {/* //! Box */} 
               <div className='flex flex-col m-md:flex-row m-md:col-span-2 items-center justify-center w-full bg-white rounded-lg  space-y-3 m-md:space-y-0 '>
            
                  <div className='flex  items-center justify-start space-x-3 lg:space-x-2   w-full border-b pb-3 m-md:pb-0 m-md:border-none px-4 '>
                    <div className='text-[#7b7b7b]'><CiSearch size={25} /></div>
                      <div className='w-full'><input
                     type='text'
                     placeholder='Job title, Keywords...'
                     value={jobSearch}
                     className={` placeholder:${jost.className} focus:outline-none lg:text-base text-[#7b8793]`}
                     onChange={(e) => setJobSearch(e.target.value)}
                        />
                        </div>
                     </div>
                    <div className='flex items-center justify-start  space-x-3 lg:space-x-1 w-full   m-md:border-l m-md:pl-8 px-4'>
                     <div className='text-[#7b7b7b]'><IoLocationOutline size={25} /></div>
                       <div className='w-full'>
                       <Select value={locationSearch} onValueChange={(e)=>setLocationSearch(e)}>
                               <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                 <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-xs`}  placeholder="City or postcode" />
                               </SelectTrigger>
                               <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]`}>
                                 <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                                 <SelectItem value="San Francisco">San Francisco</SelectItem>
                                 <SelectItem value="San Diego">San Diego</SelectItem>
                                 <SelectItem value="Seattle">Seattle</SelectItem>
                                 <SelectItem value="Chicago">Chicago</SelectItem>
                                 <SelectItem value="Houston">Houston</SelectItem>
                                 <SelectItem value="Miami">Miami</SelectItem>
                                 <SelectItem value="Boston">Boston</SelectItem>
                                 <SelectItem value="New York">New York</SelectItem>
                               </SelectContent>
                       </Select>
</div>
                      </div>
             </div>
             <Link href={`/job-list`} className='w-full m-md:w-[180px] m-md:ml-12 hover:cursor-pointer  lg:col-span-1 duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2] flex items-center justify-center text-white rounded-lg text-sm py-4 m-md:py-4 m-2xl:py-5 '>Find Jobs</Link>
     </div>
         

{/*//!  POpulae search  */}
<div className=' items-center justify-center '>

<div className={` ${jost.className} text-[#6f6f70]`}> <span className='text-[#202124] text-base min-w-44 pr-3'>Popular Searches  :   </span>   Designer, Developer, Web, IOS, PHP, Senior, Engineer</div>
</div>




  </div>
  )
}

export default HomeData