'use client'
import SideBar from '@/app/(components)/SideBar/SideBar'
import React, { useState } from 'react'
import { Jost } from 'next/font/google'

import jobCategoryArrays from '@/app/Array/job-category'
import { rawListeners } from 'process'
import Login from './Login'
import Register from './Register'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = () => {

  const [currentWay,setCurrentWay]=useState<String>('login')
  
  function handleClick(data:String){
    setCurrentWay(data)
  }
 
  return (
    <div className='w-full  flex flex-col items-center bg-white '>
      <div className='flex flex-col items-center justify-center space-y-2 py-14 bg-[#f2f5fc] w-full'>
      <div className={`${jost.className} text-xl md:text-2xl lg:text-3xl  text-[#202124]`}>Login/Register</div>
      <div style={{fontWeight:300}} className={`${jost.className} flex items-center space-x-1 text-[#7f6b69]  `}><span>Home</span><span className={`${jost.className} text-[#202124]`}> / Login/Register</span></div>
      </div>
     <div className='w-full flex items-center justify-center  max-w-xl p-8'>
      <div onClick={()=>handleClick("login")}  className={`${jost.className} ${currentWay==='login' ? 'bg-[#1967d2] text-white border-[#1967d2] ' : "bg-slate-500 text-white "} p-4 rounded-l-xl w-1/2    flex items-center justify-center hover:cursor-pointer  `}>Login</div>
      <div  onClick={()=>handleClick("register")} className={`${jost.className} ${currentWay==='register' ? 'bg-[#1967d2] text-white border-[#1967d2] ' : "bg-slate-500 text-white "} p-4 rounded-r-xl w-1/2    flex items-center justify-center border  hover:cursor-pointer  `}>Register</div>
      </div>
      <div  className="w-full h-full flex items-center justify-center max-w-screen-xl py-10">

       {currentWay==='login'&& <Login/>}
        {currentWay==='register'&& <Register/>}
      
         </div>

     </div>
  )
}

export default page