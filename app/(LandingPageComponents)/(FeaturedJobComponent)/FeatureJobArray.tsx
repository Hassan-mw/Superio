import React from 'react'
import { TfiTag } from "react-icons/tfi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
import Image from 'next/image';
import { Jost } from 'next/font/google';
import Link from 'next/link';
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})
const FeatureJobArray = () => {

    const featureJobArray= [
      {
          "id": 1,
          "icon": "Logo11",
          "name": "Marketing Strategist",
          "url": "marketing-strategist",
          "field": "Marketing",
          "location": "Los Angeles",
          "minSalary": 200,
          "maxSalary": 500,
          "time": "full-time",
          "urgent": false,
          "datePosted": "last-7-days",
          "expirationDate": "March 10, 2026",
          "qualification": "Bachelor's Degree",
          "careerLevel": "manager",
          "slug": "marketing-strategist",
          "category": "marketing",
          "jobtype": "full-time",
          "distance": 75,
          "experience": "3-year",
          "date": "May 30,2027"
      },
      {
          "id": 2,
          "icon": "Logo7",
          "name": "Automotive Engineer",
          "url": "automotive-engineer",
          "field": "Automotive Jobs",
          "location": "Detroit",
          "minSalary": 220,
          "maxSalary": 680,
          "time": "full-time",
          "urgent": true,
          "datePosted": "last-24-hours",
          "expirationDate": "December 1, 2026",
          "qualification": "Bachelor's Degree",
          "careerLevel": "executive",
          "slug": "automotive-engineer",
          "category": "automotive-job",
          "jobtype": "full-time",
          "distance": 95,
          "experience": "3-year",
          "date": "May 30,2027"
      },
      {
          "id": 3,
          "icon": "Logo2",
          "name": "Healthcare Assistant",
          "url": "healthcare-assistant",
          "field": "Health & Care",
          "location": "Phoenix",
          "minSalary": 120,
          "maxSalary": 450,
          "time": "internship",
          "urgent": false,
          "datePosted": "last-7-days",
          "expirationDate": "November 1, 2026",
          "qualification": "Associate Degree",
          "careerLevel": "student",
          "slug": "healthcare-assistant",
          "category": "health-and-care",
          "jobtype": "internship",
          "distance": 70,
          "experience": "fresh",
          "date": "May 30,2027"
      },
      {
          "id": 4,
          "icon": "Logo12",
          "name": "Customer Support Specialist",
          "url": "customer-support-specialist",
          "field": "Customer Service",
          "location": "Boston",
          "minSalary": 100,
          "maxSalary": 400,
          "time": "temporary",
          "urgent": false,
          "datePosted": "last-30-days",
          "expirationDate": "October 1, 2026",
          "qualification": "High School Diploma",
          "careerLevel": "officer",
          "slug": "customer-support-specialist",
          "category": "customer",
          "jobtype": "temporary",
          "distance": 110,
          "experience": "1-year",
          "date": "May 30,2027"
      },
      {
          "id": 5,
          "icon": "Logo4",
          "name": "Financial Analyst",
          "url": "financial-analyst",
          "field": "Accounting & Finance",
          "location": "Seattle",
          "minSalary": 300,
          "maxSalary": 800,
          "time": "full-time",
          "urgent": true,
          "datePosted": "last-hour",
          "expirationDate": "September 1, 2026",
          "qualification": "Master's Degree",
          "careerLevel": "manager",
          "slug": "financial-analyst",
          "category": "accounting-finance",
          "jobtype": "full-time",
          "distance": 90,
          "experience": "4-year",
          "date": "May 30,2027"
      } ,
       {
        "id": 6,
        "icon": "Logo9",
        "name": "Business Consultant",
        "url": "business-consultant",
        "field": "Consulting",
        "location": "San Diego",
        "minSalary": 180,
        "maxSalary": 300,
        "time": "Freelance",
        "urgent": true,
        "datePosted": "last-7-days",
        "expirationDate": "March 28, 2026",
        "qualification": "Master's Degree",
        "careerLevel": "Manager",
        "slug": "business-consultant",
        "category": "customer",
        "jobtype": "freelance",
        "distance": 80,
        "experience": "3-year",
        "date": "May 30,2027"
    }]
      


  return (
    <div className='w-full flex flex-col items-center space-y-9 justify-center'>

    <div className='w-full grid grid-cols-1 gap-6 md:grid-cols-2 '>
        {featureJobArray.map((data,index)=>
       <Link   href={`/job/${data.url}`} key={index}  className='w-full flex items-start justify-between lg:py-7 border border-slate-200 rounded-md   group '>
        <div className=' flex items-center -center space-x-4 p-5 h-full  '>
         {/* //!  Image */}
          <div className=' h-full'><Image src={`/${data.icon}.jpg`}  height={50} width={50} alt='Image/Logo' /></div>
         {/* //! Data */}
          <div className='flex flex-col space-y-3 items-start justify-between truncate    '>
          {/* Name - Featuref */}
           <div className={` ${jost.className} flex flex-col lg:flex-row items-start justify-start  w-full space-x-4 `}>
             <div className='text-[14px] md:text-base font-semibold text-[#202124] group-hover:text-[#2d73d3]
             duration-500 truncate  lg:w-full hover:cursor-pointer '>{data.name}</div>  
             <div className='text-xs text-[#58b771]'>Featured</div>
           </div>
           {/*details  */}
          <div className='w-full  grid grid-cols-1 xl:grid-cols-2 gap-1 place-items-start xl:place-items-center  text-[#696969]'>
          <div className='flex md:flex-col lg:flex-row items-start justify-start  w-full space-x-4 md:space-x-0 lg:space-x-4 md:space-y-1 lg:space-y-0 ' >
           <div className='flex space-x-1 items-center  '>  <div><IoBagHandleOutline size={15} /></div>    <div className='text-sm  hover:cursor-pointer hover:text-[#202124]'>{data.field}</div>  </div>
           <div className='flex space-x-1  items-center'>  <div><CiLocationOn  size={15} /></div>    <div className='text-sm  hover:cursor-pointer hover:text-[#202124]'>{data.location}</div>  </div>
          </div>
          <div className='flex items-center justify-start space-x-1'>  <div><PiMoneyThin  size={15} /></div>    <div className='text-sm'>{`${data.minSalary} $ - $ ${data.maxSalary}`}</div>  </div>
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
        )}
      
    </div>
    <div className='min-w-full  flex items-center justify-center'>
   

        <Link  href="/job-list" className='w-[230px] text-lg py-2 flex items-center hover:cursor-pointer justify-center duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2]  text-white rounded-lg '>Load More Listing</Link>
        </div>  
    </div>
  )
}

export default FeatureJobArray