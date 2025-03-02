
import SideBar from '@/app/(components)/SideBar/SideBar'
import React from 'react'
import { Jost } from 'next/font/google'
import JobCategorySidebarData from './JobCategorySidebarData'
import JobCategoryListData from '../JobCategoryListData'
import jobCategoryArrays from '@/app/Array/job-category'
import { rawListeners } from 'process'
import { getAllJob } from '@/app/API/ApiCall'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const page =async ({searchParams,params}:any) => {
const filter=await searchParams
const JobData=await getAllJob({filter});
const {name}=await params
const filteredFeatureJob=JobData.job.filter(el=>el.category===name) 

  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>{name}</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home </span><span>/ Jobs</span><span className={`${jost.className} text-[#202124]`}> / {name}</span></div>
      </div>
      <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3  max-w-screen-xl">
        <div className='w-[40%] hidden lg:block '>
          <JobCategorySidebarData/>
       
        </div>
        <div className='w-full  lg:w-full  p-2 '>
          <div className='w-full flex flex-col items-center space-y-5'>
         
           {/* Main Body */}
           <div className='w-full  flex-1 '>
         <JobCategoryListData filteredJob={filteredFeatureJob} />

           </div>
          </div>
          </div>
         </div>

     </div>
  )
}

export default page