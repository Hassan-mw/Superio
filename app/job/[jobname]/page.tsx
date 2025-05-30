"use client"
import React, { useEffect, useState } from 'react'
import TopBody from './TopBody'
import jobCategoryArrays from '@/app/Array/job-category'
import MiddleBody from './MiddleBody'
import BottomBody from './BottomBody'
import { Jost, Prompt } from 'next/font/google'
import { getAllJob, getjobById } from '@/app/API/ApiCall'
import Link from 'next/link'
import { BiLogInCircle } from 'react-icons/bi'
import axios from 'axios';
import Cookies from "js-cookie";


interface paramsType {
  params:{jobname:string}
}

interface filteredFeatureJobType {
     id:number,
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

const page = ({params}:paramsType) => {
  console.log("Token stored in cookie:", Cookies.get("jwt"))

  const [jobDataNew,setJobDataNew]=useState([])
  const [error,setError]=useState()


   useEffect(()=>{
    const fetchjob=async()=>{
   try{
    const jobName=await params.jobname
  const response=await axios.get(
    `http://localhost:8000/api/jobs/${jobName}`,
    //{},
    { withCredentials: true }
  )

  setJobDataNew(response)
  }catch(err){

    setError(err.response)
    if(err.response?.statusText==='Unauthorized'){
      return(
        <div>{err.response.data?.message}</div>
      )
    }
   }}
fetchjob();
   },[params])


  const [category]=jobDataNew?.data?.getjob || []
  console.log(category)


if(error?.statusText==='Unauthorized'){
  return (
  <div className={`${jost.className} w-full flex flex-col space-y-4 items-center justify-center h-full min-h-screen/70`}>
  <div>{error.data.message}</div> 
  <Link href="/login" className={`${jost.className} text-blue-500 text-2xl`}>Login</Link>
  </div>)
}

// if(category){


const {field,icon,location,qualification,experience,name,salery,time,urgent,expirationDate,maxSalary,minSalary,date,careerLevel}=category || {}

 console.log(field,icon,location,qualification,experience,name,salery,time,urgent,expirationDate,maxSalary,minSalary)

  return (
    <div className='w-full flex items-center justify-center  bg-white'>
    <div className='w-full h-full max-w-screen-xl  flex flex-col  lg:flex-row lg:space-x-5  space-y-7 lg:space-y-0 lg:items-center lg:justify-start  p-3 '>
    <div className='w-full lg:w-[70%]  flex flex-col   space-y-7  bg-white'>
   <TopBody icon={icon} date={date} name={name} expirationDate={expirationDate} maxSalary={maxSalary} minSalary={minSalary} icon={icon} location={location} field={field} salery={salery} time={time} urgent={urgent} />
   <MiddleBody icon={icon}  date={date} maxSalary={maxSalary} minSalary={minSalary}  location={location} careerLevel={careerLevel} expirationDate={expirationDate} experience={experience}  qualification={qualification}/>
    </div>  

   <div className='w-full lg:w-[30%] h-full '><BottomBody icon={icon} field={field} location={location} expirationDate={expirationDate} />  </div>  
    </div>  
    </div>  
  )
}

export default page