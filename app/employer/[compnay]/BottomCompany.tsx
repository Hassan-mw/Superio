'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Jost } from 'next/font/google'
import { IoLogoTwitter } from 'react-icons/io5';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface filteredFeatureJobType{
    title:String,
    url:String, 
    location:String,
    category:String, 
    distance:Number,
    foundedData:Number,
    email:String,
    companySize:String,
    icons:String,
 

}

const BottomCompany = ({title,url, location,category, distance,foundedData, email, companySize, icons, }:filteredFeatureJobType) => {
//const BottomCompany = ({field,icon,location,expirationDate}:filteredFeatureJobType) => {
  const [subject,setSubject]=useState('')
  const [emailChange,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  return (
    <div className='w-full h-full flex flex-col items-center justify-center  lg:items-start lg:justify-start  space-y-8'>

    <div className='w-full p-3 bg-[#f5f7fc] flex flex-col items-start justify-start space-y-3 '>
  
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>categories:</div>
        <div className='text-[#8d8e8f] text-md'>sdf</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Founded Date:</div>
        <div className='text-[#8d8e8f] text-md'>{`${foundedData}`}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Company Size:</div>
        <div className='text-[#8d8e8f] text-md'>{companySize}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Location:</div>
        <div className='text-[#8d8e8f] text-md'>{location}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Phone Number:</div>
        <div className='text-[#8d8e8f] text-md'>123 456</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Email:</div>
        <div className='text-[#8d8e8f] text-md'>{email}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Socials:</div>
        <div className='text-[#8d8e8f] text-md'>  <div className="flex items-center justify-center space-x-3">
                  <div className=" text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaFacebookF size={14} /></div>
                  <div className=" text-[#929292]  hover:cursor-pointer  duration-300 hover:text-purple-400"><IoLogoTwitter size={14}  /></div>
                  <div className="  text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaInstagram  size={14}  /></div>
                  <div className="  text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaLinkedinIn  size={14} /></div>
                 </div> </div>
    </div>
    <div className='w-full flex items-center justify-center p-3 rounded-md bg-[#e6edf9] text-md text-[#2c73d5] hover:bg-[#2c73d5] hover:text-white duration-700'>envato.com</div>
    </div> 
    <div className='w-full p-3 bg-[#f5f7fc] flex flex-col items-start justify-start space-y-7 '>
    <div className={`${jost.className} w-full text-xl`}>Contact Austronomer</div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={subject}  onChange={(e)=>setSubject(e.target.value)} className='hover:outline-blue-500 w-full p-3' placeholder='Subject' />
    </div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={emailChange}  onChange={(e)=>setEmail(e.target.value)} className=' w-full hover:outline-blue-500 p-3' placeholder='E-mail' />
    </div>
    <div  className={`${jost.className} w-full  bg-white `}>
        <input value={phone}  onChange={(e)=>setPhone(e.target.value)} className=' w-full hover:outline-blue-500 p-3' placeholder='Phone' />
    </div>
    <div  className={`${jost.className} w-full bg-white  `}>
        <input value={message}  onChange={(e)=>setMessage(e.target.value)} className='  w-full hover:outline-blue-500 p-3' placeholder='Message' />
    </div>
    <div className='w-full flex items-center justify-center p-3 rounded-md hover:bg-blue-700 text-md hover:cursor-pointer  bg-[#2c73d5] text-white duration-700'>Send Message</div>

    
    </div>
    </div>
  )
}

export default BottomCompany