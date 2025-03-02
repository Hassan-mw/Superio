
import SideBar from '@/app/(components)/SideBar/SideBar'
import  { Suspense, useContext } from 'react'
import { Jost } from 'next/font/google'
import Spinner from '@/components/ui/Spinner'
import { getAllJob } from '../API/ApiCall'
import CandidatesListSidebarData from './CandidatesListSidebarData'
import CandidateListData from './CandidateListData'
import { getAllCandidate } from '../API/ApiCandidate'

import { Metadata } from 'next'

export const metadata: Metadata= {
  title: "Candidates - Superio ",
  description:"Find Jobs, Employment & Career Opportunities",
};


interface getAllCandidateDataType{
  status:String,
  candidate:[]
}

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page =async ({searchParams}:{searchParams:URLSearchParams}) => {

const filter=await searchParams
console.log(filter)
let JobData;
 const response=await getAllCandidate({filter});
const  {status,candidate}:getAllCandidateDataType=response || {status:'',candidate:[]}
 if(status==='err'){
  return (
    <div className='w-full h-full flex items-center justify-center text-4xl'>No Data</div>
  )
 }



  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Candidates</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Candidates</span></div>
      </div>
      <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3  max-w-screen-xl">
       <Suspense fallback={<Spinner/>}>

        <div className='w-[40%] hidden lg:block '>
          <CandidatesListSidebarData/>
       
        </div>
        <div className='w-full  lg:w-full  p-2 '>
          <div className='w-full flex flex-col items-center space-y-5'>
         
           {/* Main Body */}
           <div className='w-full  flex-1 '>
         <CandidateListData candidateData={candidate}/>

           </div>
          </div>
          </div>
      </Suspense>

         </div>

     </div>
  )
}

export default page