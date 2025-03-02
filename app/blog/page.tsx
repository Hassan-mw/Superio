
import SideBar from '@/app/(components)/SideBar/SideBar'
import  { Suspense, useContext } from 'react'
import { Jost } from 'next/font/google'
import Spinner from '@/components/ui/Spinner'
import { getAllJob } from '../API/ApiCall'
import CandidatesListSidebarData from './CandidatesListSidebarData'
import CandidateListData from './CandidateListData'


import { Metadata } from 'next'

export const metadata: Metadata= {
  title: "Blog - Superio ",
  description:"Find Jobs, Employment & Career Opportunities",
};


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page =async ({searchParams}:any) => {

const filter=await searchParams

let JobData;
 const data=await getAllJob({filter});

JobData=data.job




  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Blog</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Blog</span></div>
      </div>
      <div  className="w-full h-full  max-w-screen-xl">
       <Suspense fallback={<Spinner/>}>

           {/* Main Body */}
           <div className='w-full  flex-1 '>
         <CandidateListData />

          </div>
          
      </Suspense>

         </div>

     </div>
  )
}

export default page