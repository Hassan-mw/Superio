'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IoBagSharp, IoLocationOutline } from 'react-icons/io5';
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
 
interface handleFilterDataType{
  type:string,
  data:String | number,
  inputValue:String,
  jobSearch:String
}


const EmployListSidebarData = () => {
   const [searchTitle,setSearchTitle]=useState('none')
   const [location, setLocation] = useState('none')
   const [category,setCategory] = useState('none')
   const [foundedDate,setfoundedDate]=useState('1992')
   const [distance,setDistance]=useState('0')
   const searchParams=useSearchParams()
   const router=useRouter();
   const pathName=usePathname();

 useEffect(()=>{
     const params=new URLSearchParams(searchParams);
  if( searchTitle !== "none")  params.set("title",searchTitle) ; else params.delete("location");
  if( location !== "none")  params.set("location",location) ; else params.delete("location");
  if( category !== "none")  params.set("category",category) ; else params.delete("category");
  if(foundedDate!=='1992' ) params.set("foundedDate[lt]",foundedDate); else params.delete("foundedDate[lt]");
  if(distance!=='0' ) params.set("distance[lt]",distance); else params.delete("distance[lt]");
    router.replace(`${pathName}?${params.toString()}`,{scroll:false})
},[distance,searchTitle,foundedDate,location,category])




  return (
    <div className='w-full h-full flex flex-col  space-y-8  bg-white'>
    {/* input fields */}
    <div className='flex flex-col w-full space-y-7 p-4 rounded-md bg-slate-100'>
            {/*  Input Filed  1*/}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Search by Keywords</div>

                 <div className='border group-hover:border-blue-500 duration-500 p-3 space-x-3 rounded-md border-white bg-white flex items-center justify-center'>
                   <div className='text-[#7b7b7b]'><CiSearch size={25} /></div>
                    <div className='w-full'>
                      <input type='text'  onChange={(e) => setSearchTitle(e.target.value)} placeholder='Job title, Keywords...'   value={searchTitle} className={` placeholder:${jost.className} focus:outline-none lg:text-base text-[#7b8793]`}  />       
                        </div>
                             </div> 
          </div>


          {/* Radii 1 */}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Radius</div>
              <div style={{fontWeight:500}} className={` ${jost.className} text-sm text-blue-500`}>Radius: {distance} miles</div>
                    <div className='w-full'>
                       <input type='range' min='0'   value={distance} max='100'   onChange={(e) => setDistance(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
          </div>
             {/*  Select Categroy  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Category</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><IoLocationOutline size={20} /></div>
                                <div className='w-full'>
                                           <Select value={category} onValueChange={(v)=>setCategory(v)}>
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-xs`}  placeholder="City or postcode" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[250px]  w-full`}>
                                                     {/* <SelectItem value="">None</SelectItem> */}
                                                     <SelectItem value="none">None</SelectItem>
                                                     <SelectItem value="Advertising">Advertising</SelectItem>
                                                     <SelectItem value="Application">Application</SelectItem>
                                                     <SelectItem value="Customer">Customer</SelectItem>
                                                     <SelectItem value="Development">Development</SelectItem>                                                    
                                                     <SelectItem value="Design">Design</SelectItem>                                                   
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
          </div>
             {/*  Select JobType  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Location</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><IoBagSharp size={20} /></div>
                                <div className='w-full'>
                                <Select value={location} onValueChange={(v)=>setLocation(v)}>

                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="Job type" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="none">None</SelectItem>
                                                     <SelectItem value="London">London</SelectItem>
                                                     <SelectItem value="Los Angeles">los Angles</SelectItem>
                                                     <SelectItem value="Miami">Miami</SelectItem>
                                                     <SelectItem value="New York">New York</SelectItem>
                                                     <SelectItem value="Paris">Paris</SelectItem>
                                                   
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
          </div>

              {/* Founded Date*/}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Founded Date</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-start justify-start text-sm text-blue-500`}>Before {foundedDate} </div>
                    <div className='w-full'>
                       <input type='range' min='1992'   value={foundedDate} max='2025'   onChange={(e) => setfoundedDate(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
          </div>
          <div>
    
          </div>
    </div>      
     
      </div>

   
  )
}

export default EmployListSidebarData