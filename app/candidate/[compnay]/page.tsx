import React from 'react'
import jobCategoryArrays from '@/app/Array/job-category'
import { Jost, Prompt } from 'next/font/google'
import { getAllJob, getjobById } from '@/app/API/ApiCall'
import Link from 'next/link'
import { BiLogInCircle } from 'react-icons/bi'
import TopCandidate from './TopCandidate'
import BottomCandidate from './BottomCandidate'
import MiddleCandidate from './MiddleCandidate'
import { getCandidateById } from '@/app/API/ApiCandidate'


interface paramsType {
  params:{compnay:string}
}

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const page =async ({params}:{params:URLSearchParams}) => {

  const nameJob=await params.compnay
 
  const JobData=await getCandidateById({nameJob});
console.log(JobData)

const { skills,candidateName,salary,icon,experience,age,qualification,language,email,phone,location,gender,category}=JobData?.candidate


  return (
    <div className='w-full flex flex-col items-center justify-center  bg-white'>
   <TopCandidate icon={icon} candidateName={candidateName} category={category}  location={location} salary={salary} skills={skills} />
    <div className='w-full h-full max-w-screen-xl  flex flex-col  lg:flex-row lg:space-x-5  space-y-7 lg:space-y-0 lg:items-center lg:justify-start  p-3 '>
     <div className='w-full lg:w-[30%] h-full '>
    {/* <BottomBody icon={icon} field={field} location={location} expirationDate={expirationDate} />  </div>   */}
    <BottomCandidate salary={salary} experience={experience} gender={gender} age={age} qualification={qualification} language={language} phone={phone}  email={email}  /> 
     </div>  
   
    <div className='w-full lg:w-[70%]  flex flex-col   space-y-7  bg-white'>
   
   {/* <TopBody icon={icon} date={date} name={name} expirationDate={expirationDate} maxSalary={maxSalary} minSalary={minSalary} icon={icon} location={location} field={field} salery={salery} time={time} urgent={urgent} /> */}
   {/* <MiddleBody icon={icon}  date={date} maxSalary={maxSalary} minSalary={minSalary}  location={location} careerLevel={careerLevel} expirationDate={expirationDate} experience={experience}  qualification={qualification}/> */}
   <MiddleCandidate />
    </div>  

 
    </div>  
    </div>  
    // </div>  
  )
}

export default page