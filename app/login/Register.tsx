'use client';
import axios from 'axios';
import { Jost } from 'next/font/google'
import React, { use, useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';

import { IoBagOutline } from "react-icons/io5";
const jost=Jost({
weight:['500'],
subsets:['latin']
})

const Register = () => {
    const [select,setSelect]=useState('Candidate')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleSubmitForm = async () => {
     
      try {
          const response = await axios.post(
              "http://localhost:8000/api/user/signup",
              {  
                  email: email,
                  password: password,
                  ConfirmPassword:confirmPassword,
              },
              {
                  headers: {
                      "Content-Type": "application/json",
                  },
                  withCredentials: true 
              }
              
          )
          console.log(response)
          if(response.data.token){
              Cookies.set("jwt", response.data.token);
              toast.success(' Succesfully Account Created!')
              
          }
          if(!response.data.token){
            toast.error("Input data correctly!")
            
        }
      } catch (error) {
        if(error){
          toast.error("Input data correctly!")
          
      }
     

          console.error("Error signing up:", error);
      }
  };

  return (
    <div className='w-full flex flex-col items-start justify-start p-4 space-y-7'>
           <Toaster position="top-center" reverseOrder={false} />
  <div className='w-full flex items-center justify-between space-x-10'>
  <div onClick={()=>setSelect('Candidate')} className={`${jost.className}  p-3 rounded-lg duration-700 hover:bg-[#1967d2] hover:text-white  hover:cursor-pointer w-full flex items-center justify-center gap-x-3 ${select==='Candidate' ?'bg-[#1967d2] text-white ' : 'bg-[#dde8f8] text-blue-500'}`}><IoPersonOutline /> Candidate</div>
  <div onClick={()=>setSelect('Emploter')} className={`${jost.className}  p-3 rounded-lg duration-700  hover:bg-[#1967d2] hover:text-white  hover:cursor-pointer w-full flex items-center justify-center gap-x-3 ${select==='Emploter' ?'bg-[#1967d2] text-white ' : 'bg-[#dde8f8] text-blue-500'}`}><IoBagOutline /> Emploter</div>
  </div>
    
  <div className='w-full flex flex-col items-center justify-start  space-y-5 '>
          {/* <div className='w-full flex flex-col items-start justify-start space-y-3'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#202124]`}>Name <span className='text-red-600'>*</span></div>
          <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='bg-[#f0f5f7] focus:outline-none focus:border-blue-300 border focus:bg-white border-[#f0f5f7] min-w-full placeholder:text-sm p-2 rounded-md' />  
          </div> */}
          <div className='w-full flex flex-col items-start justify-start space-y-3'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#202124]`}>Email <span className='text-red-600'>*</span></div>
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='bg-[#f0f5f7] focus:outline-none focus:border-blue-300 border focus:bg-white border-[#f0f5f7] min-w-full placeholder:text-sm p-2 rounded-md' />  
          </div>
          <div className='w-full flex flex-col items-start justify-start space-y-3'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sn text-[#202124]`}>Password <span className='text-red-600'>*</span></div>
            <input required value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' type='password' className='bg-[#f0f5f7] focus:outline-none focus:border-blue-300 border focus:bg-white border-[#f0f5f7] min-w-full placeholder:text-sm p-2 rounded-md' />  
          </div>
          <div className='w-full flex flex-col items-start justify-start space-y-3'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sn text-[#202124]`}>Confirm Password <span className='text-red-600'>*</span></div>
            <input required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  placeholder='Confirm Password' type='password' className='bg-[#f0f5f7] focus:outline-none focus:border-blue-300 border focus:bg-white border-[#f0f5f7] min-w-full placeholder:text-sm p-2 rounded-md' />  
          </div>
    </div>
   <div className='flex items-center justify-center space-x-4'>
    <input type='checkbox'/>
    <p style={{fontWeight:200}} className={`${jost.className} text-sm`}>You accept our Terms and Conditions and Privacy Policy</p>
   </div>
   <div onClick={handleSubmitForm} style={{fontWeight:300}} className={`${jost.className} text-white hover:bg-blue-700 duration-700 hover:cursor-pointer bg-[#1967d2] w-full flex items-center justify-center p-4 rounded-lg text-sm `}>Register Now</div>
    </div>
  )
}

export default Register