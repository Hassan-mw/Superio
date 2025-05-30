'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IoLocationOutline } from 'react-icons/io5';
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
 
interface handleFilterDataType{
  type:string,
  data:String | number,
  inputValue:String,
  jobSearch:String
}


const JobListSidebarData = () => {
   
  const [loading,setLoading]=useState(true)
   const [jobSearch, setJobSearch] = useState('')
   const [CitySearch, setCitySearch] = useState('')
   const [rangeMiles, setRangeMiles] = useState('0')
   const [category,setCategory]=useState('none')
   const [jobType,setjobType]=useState('none')
   const [job,setJob]=useState('')
   const [datePosted,setDatePosted]=useState('none')
   const [rangeSalery, setRangeSalery] = useState('0')
   const [experienced,setExperienced]=useState<string>('none')
   const [carrerlevel,setLevel]=useState<string>('none')
   const [itemPerPage,setitemPerPage]=useState(8)
   const searchParams=useSearchParams()
   const router=useRouter();
   const pathName=usePathname();


//!Loading to false
useEffect(()=>{
  setLoading(false)
},[])


//! Seetting params
 useEffect(()=>{
     const params=new URLSearchParams(searchParams);
   if( category !== "none" ) params.set("category", category); else params.delete("category");
   if( jobType !== "none")  params.set("jobtype",jobType) ; else params.delete("jobtype");
   if( datePosted!== "none")  params.set("datePosted",datePosted) ; else params.delete("datePosted");
   if( experienced!== "none")  params.set("experience",experienced) ; else params.delete("experience");
   if( carrerlevel!== "none")  params.set("careerLevel",carrerlevel) ; else params.delete("careerLevel");
    if(rangeSalery!=='0' ) params.set("salery[lt]",rangeSalery); else params.delete("salery[lt]");
    if(rangeMiles!=='0' ) params.set("distance[lt]",rangeMiles); else params.delete("distance[lt]");
     router.replace(`${pathName}?${params.toString()}`,{scroll:false})
},[jobSearch,CitySearch,rangeMiles,category,jobType,datePosted,rangeSalery,experienced,carrerlevel])


  const handleChange = (value:string) => {
    setExperienced(value);
  };
   
  const handleLevelChange = (value:string) => {
    setLevel(value);
  };
   

  return (
    <div className={` w-full h-full flex flex-col  space-y-8  bg-white`}>
    {/* input fields */}
 {/* {loading ?  */}
 
 {/* <p className='w-full h-full border p-5 rounded-md'>Loading Sidebar...</p> */}
 {/* : */}
 
 
 <div className='flex flex-col w-full space-y-7 p-4 rounded-md bg-slate-100'>
    

          {/* Radii 1 */}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Radius</div>
              <div style={{fontWeight:500}} className={` ${jost.className} text-sm text-blue-500`}>Radius: {rangeMiles} miles</div>
                    <div className='w-full'>
                       <input type='range' min='0'   value={rangeMiles} max='100'   onChange={(e) => setRangeMiles(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
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
                                                     <SelectItem value="freelance">Freelance</SelectItem>
                                                     <SelectItem value="automotive-jobs">Automatic Jobs</SelectItem>
                                                     <SelectItem value="customer">Customer</SelectItem>
                                                     <SelectItem value="design">Design</SelectItem>
                                                     <SelectItem value="human-resources">Human Resources</SelectItem>
                                                     <SelectItem value="development">Development</SelectItem>
                                                     <SelectItem value="health-and-care">Health and Care</SelectItem>
                                                     <SelectItem value="marketing">Marketing</SelectItem>
                                                     <SelectItem value="project-mangament">Project Mangament</SelectItem>
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
          </div>
             {/*  Select JobType  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Job type</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                                <div className='w-full'>
                                <Select value={jobType} onValueChange={(v)=>setjobType(v)}>

                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="Job type" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="none">None</SelectItem>
                                                     <SelectItem value="freelance">Freelance</SelectItem>
                                                     <SelectItem value="full-time">Full Time</SelectItem>
                                                     <SelectItem value="intership">Intership</SelectItem>
                                                     <SelectItem value="part-time">Part Time</SelectItem>
                                                     <SelectItem value="temporary">Temporary</SelectItem>
                                                   
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
          </div>
             {/*  Input Filed  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Date Posted</div>

            <div className='w-full flex flex-col items-start px-3 space-y-3'>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio' value="none" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>None</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio' value="last-hour" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last Hour</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'   value="last-7-days" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 7 days</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="last-24-hour" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 24 hour</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="last-14-days" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 14 days</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="last-30-days" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 30 days</div></div>

              </div>    
          </div>
             {/*  Boolean Experience Level  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
                 <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Experience Level</div>
                     <div className='w-full flex flex-col items-start px-3 space-y-3'>
                     <div className="flex items-center space-x-2">
        <Switch id="fresh" checked={experienced === "none"} defaultChecked onCheckedChange={() => handleChange("none")} />
        <Label htmlFor="fresh">None</Label>
      </div>
                     <div className="flex items-center space-x-2">
        <Switch id="fresh" checked={experienced === "fresh"} defaultChecked onCheckedChange={() => handleChange("fresh")} />
        <Label htmlFor="fresh">Fresh</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="1-year" checked={experienced === "1-year"} onCheckedChange={() => handleChange("1-year")} />
        <Label htmlFor="1-year">1 Year</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="2-year" checked={experienced === "2-year"} onCheckedChange={() => handleChange("2-year")} />
        <Label htmlFor="2-year">2 Year</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="3-year" checked={experienced === "3-year"} onCheckedChange={() => handleChange("3-year")} />
        <Label htmlFor="3-year">3 Year</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="4-year" checked={experienced === "4-year"} onCheckedChange={() => handleChange("4-year")} />
        <Label htmlFor="4-year">4 Year</Label>
      </div>
                        </div>
                             </div>
             {/*  Boolean Carrier Level  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
                 <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Career Level</div>
                     <div className='w-full flex flex-col items-start px-3 space-y-3'>
            <div className="flex items-center space-x-2"><Switch checked={carrerlevel==='none'} onCheckedChange={()=>handleLevelChange("none")} id="airplane-mode"   /><Label   htmlFor="airplane-mode">None</Label></div>  
            <div className="flex items-center space-x-2"><Switch checked={carrerlevel==='manager'} onCheckedChange={()=>handleLevelChange("manager")} id="airplane-mode"   /><Label   htmlFor="airplane-mode">Manager</Label></div>  
            <div className="flex items-center space-x-2"><Switch  checked={carrerlevel==='officer'} onCheckedChange={()=>handleLevelChange("officer")} id="airplane-mode" /><Label   htmlFor="airplane-mode"> Office</Label></div>    
            <div className="flex items-center space-x-2"><Switch  checked={carrerlevel==='student'} onCheckedChange={()=>handleLevelChange("student")} id="airplane-mode" /><Label   htmlFor="airplane-mode"> Student</Label></div>
            <div className="flex items-center space-x-2"><Switch  checked={carrerlevel==='executive'} onCheckedChange={()=>handleLevelChange("executive")} id="airplane-mode" /><Label   htmlFor="airplane-mode"> Esecutive</Label></div> 
            <div className="flex items-center space-x-2"><Switch  checked={carrerlevel==='other'} onCheckedChange={()=>handleLevelChange("other")} id="airplane-mode" /><Label   htmlFor="airplane-mode"> Others</Label></div>    
                        </div>
                             </div>
              {/* Radii Salery*/}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Salary</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-center justify-center text-sm text-blue-500`}>$ {rangeSalery} </div>
                    <div className='w-full'>
                       <input type='range' min='0'   value={rangeSalery} max='1000'   onChange={(e) => setRangeSalery(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
          </div>
          <div>
            
          </div>
          
    </div> 
     {/* }     */}
  

    
     
      </div>

   
  )
}

export default JobListSidebarData