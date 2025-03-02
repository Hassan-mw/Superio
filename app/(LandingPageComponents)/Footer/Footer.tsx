'use client'
import { Jost } from 'next/font/google';
import React from 'react'
// import TestimonialsArray from './TestimonialsArray'
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'lucide-react';
import Image from 'next/image';
import Logoimage from "./../../../public/logo.svg"
import LogoImage from '@/app/(components)/Image/LogoImage';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const name="hassan Khan"
const Footer = () => {
  return (
    <div className='w-full h-full flex flex-col items-start p-5   max-w-screen-xl'>
    <div className='w-full grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5  sm:gap-5 gap-y-8     border-b py-6 '>
     

        {/* //! 1 */}
      {/* Call us */} {/* For Candidates */}  
      {/* <div className='w-full flex flex-col sm:flex-row items-start justify-start sm:justify-between lg:justify-center  lg:space-x-9 xl:space-x-16 space-y-5  lg:space-y-0 '> */}
      <div className='flex flex-col space-y-3'>
     <LogoImage height={145} width={145}/>
      <div className={`${jost.className} text-xl text-[#232427]`}>Call us</div>
      <div className={`${jost.className} text-[#1967d2]`}>123 456 7890</div>
      <div className={`${jost.className} text-[#828d98] text-sm  `}>328 Queensberry Street, North Melbourne VIC</div>
      <div className={`${jost.className} text-[#828d98] text-sm  `}>3051, Australia.</div>
      <div className={`${jost.className} text-[#828d98] text-sm  `}>support@superio.com</div>
     </div>  
     
     <div className='flex flex-col space-y-3'>  
      <div className={`${jost.className} text-xl text-[#232427]  `}>For Candidates</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Browse Jobs</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Candidate Dashboard</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Job Alerts</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>My Bookmarks</div>
     </div> 
      {/* </div> */}
      {/* //!  2 */}
      {/* <div className='w-full flex flex-col  sm:flex-row items-start justify-start  sm:justify-between  lg:justify-center  lg:space-x-8 xl:space-x-20 space-y-5 lg:space-y-0 '> */}
     
      {/* For Employers  */} 
     <div className='flex flex-col space-y-3'> 
      <div className={`${jost.className} text-xl text-[#232427]  `}>For Employers</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>All Employers</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Employers Dashboard</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Submit Job</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Job Packages</div>
     </div>
      {/* About Us  */}
     <div className='flex flex-col space-y-3'>
      <div className={`${jost.className} text-xl text-[#232427]`}>About Us</div>
      <div className={`${jost.className} text-[#828d98] text-sm hover:cursor-pointer hover:text-[#1967d2]`}>Contact Us</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Contact Us</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Terms</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}> Packages</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}> FAQ</div>
     </div>
      {/* Helpful Resources  */}
     <div className='flex flex-col space-y-3'>
      <div className={`${jost.className} text-xl text-[#232427]`}>Helpful Resources</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Site Map</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Terms of Use</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}>Privacy Center</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}> Security Center</div>
      <div className={`${jost.className} text-[#828d98] text-sm  hover:cursor-pointer hover:text-[#1967d2]`}> Accessibility Center</div>
     </div>
    
    </div> 
    {/* </div>  */}
    {/* RIGHTS RESERVED */}
    <div className='w-full flex flex-col md:flex-row  items-center justify-center md:justify-between space-y-4 md:space-y-0 p-5'>
     <div className='text-sm text-[#828d98]'>© 2021 Superio. All Right Reserved.</div>
      <div className="flex items-center justify-center space-x-3">
          <div className=" text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaFacebookF size={14} /></div>
          <div className=" text-[#929292]  hover:cursor-pointer  duration-300 hover:text-purple-400"><IoLogoTwitter size={14}  /></div>
          <div className="  text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaInstagram  size={14}  /></div>
          <div className="  text-[#929292] hover:cursor-pointer  duration-300 hover:text-purple-400"><FaLinkedinIn  size={14} /></div>
         </div> 
    </div>
    </div> 
  )
}

export default Footer