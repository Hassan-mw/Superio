'use client';

import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPenFancy, FaTwitch } from "react-icons/fa";
import { MdGTranslate, MdMarkEmailRead, MdOutlineFolderCopy } from "react-icons/md";
import { Jost } from 'next/font/google'
import { IoCashOutline, IoLogoTwitter, IoMailOutline, IoPersonOutline } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';
import { GiSandsOfTime } from "react-icons/gi";
import { FaPhoneFlip } from 'react-icons/fa6';
import { GrDocumentUpload } from "react-icons/gr";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface filteredCandidate {
    salary:number,
    experience:String,
     gender:String,
     age:Number, 
     qualification:String,
     language:string,
     email:string,
     phone:Number,
  }
  

const BottomCandidate = ({salary,experience,gender,age,qualification,language,phone,email}:filteredCandidate) => {
//const BottomCompany = ({field,icon,location,expirationDate}:filteredFeatureJobType) => {
  const [subject,setSubject]=useState('')
  const [emailHandle,setEmail]=useState('')
  const [phoneHandle,setPhone]=useState('')
  const [message,setMessage]=useState('')
  return (
    <div className='w-full h-full flex flex-col items-center justify-center  lg:items-start lg:justify-start  space-y-8'>

    <div className='w-full p-3 bg-[#f5f7fc] flex flex-col items-start justify-start space-y-3 '>
  
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><IoCashOutline size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-2 '>
           <div className=' text-black text-base'>Offerd Salary</div>
        <div className='text-[#8d8e8f] text-md'>{salary} / year</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><CiCalendar size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-2 '>
           <div className=' text-black text-base'>Experience Time</div>
        <div className='text-[#8d8e8f] text-md'>{experience}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><IoPersonOutline size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-2 '>
           <div className=' text-black text-base'>Gender</div>
        <div className='text-[#8d8e8f] text-md'>{gender}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><GiSandsOfTime size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-1 '>
           <div className=' text-black text-base'>Age</div>
        <div className='text-[#8d8e8f] text-md'>{`${age}`}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><FaPenFancy size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-1 '>
           <div className=' text-black text-base'>Qualification</div>
        <div className='text-[#8d8e8f] text-md'>{qualification}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><MdGTranslate size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-1 '>
           <div className=' text-black text-base'>Language</div>
        <div className='text-[#8d8e8f] text-md'>{language}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><FaPhoneFlip size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-1 '>
           <div className=' text-black text-base'>Phone</div>
        <div className='text-[#8d8e8f] text-md'>{`${phone}`}</div>
       </div>
    </div>
    <div  className={`${jost.className} w-full flex items-start justify-start space-x-4  `}>
        <div className='text-blue-500'><IoMailOutline size={20} /></div>
       <div className='flex flex-col items-start justify-start space-y-1 '>
           <div className=' text-black text-base'>Email</div>
        <div className='text-[#8d8e8f] text-md'>{email}</div>
       </div>
    </div>
    </div> 
    <div  className='w-full p-3 bg-[#d4e1f5] flex items-center justify-center hover:text-white rounded-md duration-700 hover:bg-blue-600  hover:cursor-pointer text-blue-600'>
    <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col items-start justify-start'>
            <div>cv_candidate</div>
            <div className='text-xl font-semibold'>PDF</div>
        </div>
        <div><GrDocumentUpload size={20} /></div>
    </div>
    </div>
    <div className='w-full p-3 bg-[#f5f7fc] flex flex-col items-start justify-start space-y-7 '>
    <div className={`${jost.className} w-full text-xl`}>Contact Austronomer</div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={subject}  onChange={(e)=>setSubject(e.target.value)} className='hover:outline-blue-500 w-full p-3' placeholder='Subject' />
    </div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={emailHandle}  onChange={(e)=>setEmail(e.target.value)} className=' w-full hover:outline-blue-500 p-3' placeholder='E-mail' />
    </div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={phoneHandle}  onChange={(e)=>setPhone(e.target.value)} className=' w-full hover:outline-blue-500 p-3' placeholder='Phone' />
    </div>
    <div  className={`${jost.className} w-full bg-white  `}>
        <input value={message}  onChange={(e)=>setMessage(e.target.value)} className='  w-full hover:outline-blue-500 p-3' placeholder='Message' />
    </div>
    <div className='w-full flex items-center justify-center p-3 rounded-md hover:bg-blue-700 text-md hover:cursor-pointer  bg-[#2c73d5] text-white duration-700'>Send Message</div>

    
    </div>
    </div>
  )
}

export default BottomCandidate