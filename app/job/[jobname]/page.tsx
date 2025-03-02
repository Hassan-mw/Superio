import React from 'react'
import TopBody from './TopBody'
import jobCategoryArrays from '@/app/Array/job-category'
import MiddleBody from './MiddleBody'
import BottomBody from './BottomBody'
import { Jost, Prompt } from 'next/font/google'
import { getAllJob, getjobById } from '@/app/API/ApiCall'
import Link from 'next/link'
import { BiLogInCircle } from 'react-icons/bi'


interface paramsType {
  params:{jobname:string}
}

interface filteredFeatureJobType {
     id:number,
    icon:string,
    name:string, 
    field:string,
    location:string,
    salery:string,
    time:string,
    urgent:boolean,
    expirationDate:String,
    maxSalary:String,
    minSalary:String,
    date:String,
    careerLevel:String,
    experience:String,
    qualification:String,
    icon:String

}
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page =async ({params}:paramsType) => {
  // console.log(params)
  const nameJob=await params.jobname
  const JobData=await getjobById({name:nameJob});
  if( JobData.message==="Invalid token"){
    // data=[{status:"not Login"}]
    console.log('🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪🎪')
return (
  <div className=' w-full h-full flex flex-col space-y-4 items-center justify-center'>

  <div className={`${jost.className} text-red-500 text-8xl `}>You are not login</div>
  <Link href='/login' className={`${jost.className} flex items-center justify-center gap-x-3 pb-2 duration-500 border-[#f7f8fc] hover:border-blue-500 hover:text-blue-500 text-5xl border-b-4  `}>
    Login   <BiLogInCircle />
  </Link> 
   </div>
)
   }
  if(JobData?.status==='not Login'){
  }
  console.log(JobData.status,'🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼🥼')
  const [category]=JobData.getjob
const job:filteredFeatureJobType | undefined =category

if(!job){
  return 
  <div>
    No data avaiiable
  </div>
}
const {field,icon,location,qualification,experience,name,salery,time,urgent,expirationDate,maxSalary,minSalary,date,careerLevel}=job

  return (
    <div className='w-full flex items-center justify-center  bg-white'>
    <div className='w-full h-full max-w-screen-xl  flex flex-col  lg:flex-row lg:space-x-5  space-y-7 lg:space-y-0 lg:items-center lg:justify-start  p-3 '>
    <div className='w-full lg:w-[70%]  flex flex-col   space-y-7  bg-white'>
   <TopBody icon={icon} date={date} name={name} expirationDate={expirationDate} maxSalary={maxSalary} minSalary={minSalary} icon={icon} location={location} field={field} salery={salery} time={time} urgent={urgent} />
   <MiddleBody icon={icon}  date={date} maxSalary={maxSalary} minSalary={minSalary}  location={location} careerLevel={careerLevel} expirationDate={expirationDate} experience={experience}  qualification={qualification}/>
    </div>  
 icon:string,
   <div className='w-full lg:w-[30%] h-full '><BottomBody icon={icon} field={field} location={location} expirationDate={expirationDate} />  </div>  
    </div>  
    </div>  
  )
}

export default page