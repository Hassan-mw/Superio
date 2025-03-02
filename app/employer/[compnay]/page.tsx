import React from 'react'
import jobCategoryArrays from '@/app/Array/job-category'
import { Jost, Prompt } from 'next/font/google'
import { getAllJob, getjobById } from '@/app/API/ApiCall'
import Link from 'next/link'
import { BiLogInCircle } from 'react-icons/bi'
import TopCompant from './TopCompant'
import MiddleCompany from './MiddleCompany'
import BottomCompany from './BottomCompany'
import { getEmployById } from '@/app/API/ApiEmploy'


interface paramsType {
  params:{compnay:URLSearchParams}
}

interface filteredFeatureJobType {
  title:String,
  url:String, 
  location:String,
  category:String, 
  distance:Number,
  foundedDate:Number,
  email:String,
  companySize:String,
  icons:String,
  openJob:Number

}
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const page =async ({params}:paramsType) => {

  const nameJob=await params.compnay
 
  const JobData=await getEmployById({nameJob});


const {title,url, location,category,branch, distance,foundedDate, email, companySize, icons, openJob}=JobData.company
const {name,url:jobUrl,minSalary,maxSalary,location:jobLocation,fields}=branch
console.log(name,jobUrl,minSalary,maxSalary,jobLocation,fields)
  return (
    <div className='w-full flex flex-col items-center justify-center  bg-white'>
   <TopCompant icons={icons} title={title} openJob={openJob} />
    <div className='w-full h-full max-w-screen-xl  flex flex-col  lg:flex-row lg:space-x-5  space-y-7 lg:space-y-0 lg:items-center lg:justify-start  p-3 '>
     <div className='w-full lg:w-[30%] h-full '>
    {/* <BottomBody icon={icon} field={field} location={location} expirationDate={expirationDate} />  </div>   */}
    <BottomCompany title={title} url={url}  location={location} category={category}  distance={distance} foundedData={foundedDate} email={email} companySize={companySize} icons={icons}  /> 
     </div>  
   
    <div className='w-full lg:w-[70%]  flex flex-col   space-y-7  bg-white'>
   
   
   <MiddleCompany branch={branch} />
    </div>  

 
    </div>  
    </div>  
    // </div>  
  )
}

export default page