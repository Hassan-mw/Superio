
import  { Suspense } from 'react'
import { Jost } from 'next/font/google'
import Spinner from '@/components/ui/Spinner'
import EmployListSidebarData from './EmployListSidebarData'
import EmployListData from './EmployListData'
import { getAllEmploy } from '../API/ApiEmploy'
import { Metadata } from 'next'

export const metadata: Metadata= {
  title: "Employers - Superio ",
  description:"Find Jobs, Employment & Career Opportunities",
};


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface getAllEmployDatType{
  status:string,
  company:[]
}

const page =async ({searchParams}:{searchParams:URLSearchParams}) => {

const filter=await searchParams
console.log(filter)
let JobData;
 const response=await getAllEmploy({filter});
const  {status,company}:getAllEmployDatType=response || {status:'',company:[]}
 if(status==='err'){
  return (
    <div className='w-full h-full flex items-center justify-center text-4xl'>No Data</div>
  )
 }




  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Employ</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Employ</span></div>
      </div>
      <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 py-7 p-3  max-w-screen-xl">
       <Suspense fallback={<Spinner/>}>

        <div className='w-[40%] hidden lg:block '>
          <EmployListSidebarData/>
       
        </div>
        <div className='w-full  lg:w-full  p-2 '>
          <div className='w-full flex flex-col items-center space-y-5'>
         
           {/* Main Body */}
           <div className='w-full  flex-1 '>
         <EmployListData data={company} />

           </div>
          </div>
          </div>
      </Suspense>

         </div>

     </div>
  )
}

export default page