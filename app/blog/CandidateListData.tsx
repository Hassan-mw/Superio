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
import { Button } from "@/components/ui/newbutton";
import { GoDotFill } from "react-icons/go";


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

interface handleJobDataType{
  jobData:[]
}
 


const CandidateListData = () => {

  const BlogData=[
    {id:'1',image:'a1',url:'attract-sales-and-profits',title:'Atract Sales And Profites'},
    {id:'2',image:'a2',url:'5-tips-for-your-job-interview',title:'5 Tips For Your Job Interviewa'},
    {id:'3',image:'a3',url:'the-evening-of-the-holiday',title:'The Evening of the Holiday'},
    {id:'4',image:'a4',url:'the-modern-art-of-coffe',title:'The Modern Art of  Coffe'},
    {id:'5',image:'a5',url:'html-css-js',title:'HTML , CSS , JS Developer'},
    {id:'6',image:'a6',url:'join-team-html-developer',title:'Join Team HTML Developer'},

  ]

  return (
    <div className='w-full p-10'>
      {/* Top Icons */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          
      {/* <div className='w-full flex flex-col space-y-3 '> */}
          {/* Data */}
          {/* 1 */}

      {    BlogData.map((data,index)=>
     <Link href={`/newArticles/${data.url}`} key={data.id} className='w-full  flex flex-col space-y-2 shadow-md border  rounded-lg'>
     <div className=' rounded-lg  w-full p-3 '><img className='rounded-md w-full object-cover group-hover:scale-105 duration-500' src={`/${data.image}.jpg`} alt='article-1'/></div>

      {/*  Image and Text    */}
        <div className='flex flex-col  space-y-1 w-full'>
         <div className='px-3 grid grid-cols-3 py-1 gap-2 text-[#6c6c6c] text-sm md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex items-center'>April.26,2021</div>
            <div className='flex items-center'><GoDotFill /> Education</div>
            <div  className='flex items-center'><GoDotFill /> 1 Comment</div>
            </div> 
        </div>
       {/* Title */}
       <div style={{fontWeight:500}} className={` ${jost.className} px-3 text-base  text-#252629] `} >{data.title}</div>
       
       {/* Long Text */}
       <div className={`px-3 ${jost.className} text-[#6c6c6c] text-sm`}>A job ravenously while Far much then one rank beheld after outside ....</div>
       {/* Read More */}
           {/* Read More */}
           <Button className={`px-3 ${jost.className} text-[#6e9fe3] flex items-center gap-x-5 w-24`} variant="link" effect="hoverUnderline">
           <div > Read More </div> 

    </Button>
       </Link> 
)}
      
    </div>
    {/* </div> */}
    </div>
  )
}

export default CandidateListData