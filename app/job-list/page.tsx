// // 'use client'
// import SideBar from '@/app/(components)/SideBar/SideBar'
// import  { Suspense, useContext } from 'react'
// import { Jost } from 'next/font/google'
// import JobListData from './JobListData'
// // import PostCard from './[place]/PostCard'
// import Spinner from '@/components/ui/Spinner'
// import { getAllJob } from '../API/ApiCall'
// import JobListSidebarData from './JobListSidebarData'
// import { Metadata } from 'next'
// import Cookies from "js-cookie";
// import axios from 'axios'


// export const metadata: Metadata = {
//   title: "Job List - Superio ",
//   description:"Find Jobs, Employment & Career Opportunities",
// };


// const jost=Jost({
//   weight:['500'],
//   subsets:['latin']
// })

// const page = async({searchParams}:any) => {

// const filter=await searchParams
// console.log(filter)

// let JobData;
//  const data=await getAllJob({filter});

// JobData=data.job




// // if(loc!=="All" ){
// //   console.log(loc)
// //   JobData = JobData?.filter(el => el.location.trim().toLowerCase() === loc.trim().toLowerCase());

// // }

// // const data=await getAllJob({filter});
// // console.log(JobData)
// // JobData=data.job

// console.log("Token stored in cookie:", Cookies.get("jwt"))
//   return (
//     <div className='w-full  flex flex-col items-center bg-white '>
//       <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
//       <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Job List</div>
//       <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Job List</span></div>
//       </div>

//       <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3  max-w-screen-xl">
//        <Suspense fallback={<Spinner/>}>

//         <div className='w-[40%] hidden lg:block '>
//           <JobListSidebarData/>
       
//         </div>
//         <div className='w-full  lg:w-full  p-2 '>
//           <div className='w-full flex flex-col items-center space-y-5'>
         
//            {/* Main Body */}
//            <div className='w-full  flex-1 '>
//          <JobListData jobData={JobData}/>

//            </div>
//           </div>
//           </div>
//       </Suspense>

//          </div>

//      </div>
//   )
// }

// export default page

"use client";
import SideBar from "@/app/(components)/SideBar/SideBar";
import { Suspense, useEffect, useState } from "react";
import { Jost } from "next/font/google";
import JobListData from "./JobListData";
import Spinner from "@/components/ui/Spinner";
import { getAllJob } from "../API/ApiCall";
import JobListSidebarData from "./JobListSidebarData";
import Cookies from "js-cookie";
import axios from "axios";

const jost = Jost({
  weight: ["500"],
  subsets: ["latin"],
});

const Page = ({ searchParams }:{searchParams:URLSearchParams}) => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataJob,setDataJob]=useState([])

  useEffect(() => {
    
    const fetchJobs = async () => {
      const queryString = new URLSearchParams(searchParams).toString();
      try {
        const response = await axios.get(
          `http://localhost:8000/api/jobs?${queryString}`,
          // {},
          { withCredentials: true }
        );
        // const data=await response
        console.log(response,'🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠🎠')
        setDataJob(response.data.job || [])
        console.log("Post Response:", response);
      } catch (err) {
        console.error("Error in handleSubmit:", err);
      }
    finally{
      setLoading(false)
    }}
    fetchJobs();
  }, [searchParams]);




  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full">
        <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl text-[#202124]`}>
          Job List
        </div>
        <div className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]`}>
          <span>Home</span>
          <span className="text-[#202124]"> / Job List</span>
        </div>
      </div>


      <div className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3 max-w-screen-xl">
        {/* <Suspense fallback={<Spinner />}> */}
          <div className="w-[40%] hidden lg:block">
            <JobListSidebarData />
          </div>
         {
         loading ?
           <Spinner/>  
            :
         <div className="w-full lg:w-full p-2">
          <div className="w-full flex flex-col items-center space-y-5">
              <div className="w-full flex-1">
                 <JobListData jobData={dataJob} />
              </div>
            </div>
          </div>
        }
        
      </div>
    </div>
  );
};

export default Page;
