import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";

const SideBarFooter = () => {
  return (
    <div className="w-full  flex flex-col space-y-4 items-start justify-start pb-10" >
    <Link href="/" className="bg-[#1967d2] font-semibold rounded-md w-full flex items-center justify-center py-3 text-white">Post job</Link>
    <div className="flex flex-col items-start justify-start space-y-0">
   
    <div className="text-lg text-[#979797]">Call us</div>
    <div className="text-lg font-medium text-[#fcfcfc]">123 456 7890</div>
    </div>
    <div className="flex flex-col items-start justify-start space-y-0">
    <div className="text-sm text-[#979797]">328 Queensberry Street, North Melbourne VIC</div>
    <div className="text-sm text-[#979797]">3051, Australia.</div>
    <div className="text-sm text-[#979797]">support@superio.com</div>
    </div>
    <div className="flex items-center justify-center space-x-6">
     <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-white"><FaFacebookF /></div>
     <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-white"><FaTwitch /></div>
     <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-white"><FaLinkedinIn /></div>
     <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-white"><FaInstagram /></div>
    </div> 
    <Link href="/"></Link>
     </div>
  )
}

export default SideBarFooter