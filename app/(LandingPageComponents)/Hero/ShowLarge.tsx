'use client'
import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoLocationOutline } from 'react-icons/io5'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import HomeData from './HomeData'
import { Jost } from 'next/font/google'
import { MdOutlineMail } from 'react-icons/md'
import { GoInbox } from 'react-icons/go'
import { LuFileUp } from 'react-icons/lu'
import MagneticCursor from '@/app/abc/page'
import Link from 'next/link'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const ShowLarge = () => {
    const [jobSearch, setJobSearch] = useState('')
    const [locationSearch, setLocationSearch] = useState('')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
      // bg-[#f3f6fb]
    // <div className='w-full flex items-center justify-center '>

        <div className='w-full h-[80vh] hidden lg:block '>
           {/* //!   IMAGE  */}
        <div className=' relative w-full h-full flex items-end justify-end '>
  
        <div className='z-20  lg:h-[700px] xl:h-[730px]   2xl:h-[750px]   lg:w-[600px]  w-[520px] xl:w-[605px] bottom-0 lg:-right-[15%] lg-m:-right-[11%]  2xl-g:-right-[15%]   absolute  lg:block '>
          <img  alt='Person'  src="/slider1.png" />
       <MagneticCursor >
         <Link href='employers' className=' bottom-56 -right-20  absolute   hover:cursor-pointer '>
            <img className=' hover:cursor-pointer' src="/Job.png"/>
           </Link>
            
         <Link href='candidates' className=' bottom-10  -left-28 absolute   hover:cursor-pointer '>
            <img className=' hover:cursor-pointer' src="/CVS.png"/>
           </Link>
   
 
         <Link href='/job-list' className='bottom-[550px] -left-28 absolute hover:cursor-pointer '>
            <img className=' hover:cursor-pointer ' src="/Work.png"/>
           </Link>
 

         <Link href='/candidates' className='bottom-[460px]  -right-[120px] absolute hover:cursor-pointer '>
            <img className=' hover:cursor-pointer' src="/Candidates.png"/>
           </Link>
         </MagneticCursor>
      
     </div>
      {/* //! Data */}
      <div className=' w-full min-h-full flex items-center px-4 pb-28  z-50'>
   <HomeData/>
     
         </div> 
    
          </div>

    </div>)}
    export default ShowLarge