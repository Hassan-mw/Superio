import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Jost } from 'next/font/google'
import { IoLogoTwitter } from 'react-icons/io5';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface filteredFeatureJobType{
    field:String,
    location:String,
    expirationDate:String,
   icon:string,

}

const BottomBody = ({field,icon,location,expirationDate}:filteredFeatureJobType) => {
    console.log(icon,'🎍🎋🎋🎋🎄🎄')
  return (
    <div className='w-full h-full flex flex-col items-center justify-center  lg:items-start lg:justify-start  space-y-8'>
    <div className='bg-[#f5f7fc]  w-full flex flex-col items-center rounded-md justify-center p-3 space-y-3 '>
    <div className={`${jost.className}`}>Application ends:</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-red-500`}>{expirationDate}</div>
    <div className={`${jost.className} w-full bg-[#1967d2] duration-700 hover:cursor-pointer hover:bg-blue-700 text-white flex items-center justify-center p-3 rounded-lg`}>Apply Now <MdArrowOutward size={25} /></div>
    </div>
    <div className='w-full p-3 bg-[#f5f7fc] flex flex-col items-start justify-start space-y-3 '>
    <div className='flex items-center justify-center space-x-3'>
    <div><img  className={'h-20 w-20'} alt='Logo'   src={`/${icon}.jpg`}/></div>
    <div className='flex flex-col items-start justify-start space-y-4'>
    <div className={`${jost.className}`}>Invision</div>
    <div style={{fontWeight:300}} className={`${jost.className} hover:cursor-pointer text-xs border-b duration-500 hover:border-blue-400 text-[#6095df] border-[#f5f7fc]`}>View Company Profile</div>
    </div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>categories:</div>
        <div className='text-[#8d8e8f] text-md'>{field}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Founded Date:</div>
        <div className='text-[#8d8e8f] text-md'>1995</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Location:</div>
        <div className='text-[#8d8e8f] text-md'>{location}</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Phone Number:</div>
        <div className='text-[#8d8e8f] text-md'>123 444 555</div>
    </div>
    <div  className={`${jost.className} w-full flex items-center justify-between `}>
        <div>Email:</div>
        <div className='text-[#8d8e8f] text-md'>invision@apus.com</div>
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
    <div className='flex flex-col items-start justify-start space-y-5  w-full pb-10 '>
    <div  className={`${jost.className} text-xl`}>job Skills</div>
    <div className='grid grid-cols-4 lg:grid-cols-2 xl:grid-cols-3  items-center justify-center gap-5 '>
        <div style={{fontWeight:300}} className={`${jost.className} text-md border rounded-2xl px-5 py-2 hover:cursor-pointer`}>App</div>
        <div style={{fontWeight:300}} className={`${jost.className} text-md border rounded-2xl px-5 py-2  hover:cursor-pointer`}>Superio</div>
        <div style={{fontWeight:300}} className={`${jost.className} text-md border rounded-2xl px-5 py-2  hover:cursor-pointer`}>Support</div>
        <div style={{fontWeight:300}} className={`${jost.className} text-md border rounded-2xl px-5 py-2  hover:cursor-pointer`}>Wordpress</div>
    </div>
    </div>
    </div>
  )
}

export default BottomBody