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
import { IoLocationOutline } from 'react-icons/io5';
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


const CandidatesListSidebarData = () => {

   const [CitySearch, setCitySearch] = useState('')
   const [rangeMiles, setRangeMiles] = useState('0')
   const [gender,setGender]=useState('none')
   const [location,setLocation]=useState('none')
   const [datePosted,setDatePosted]=useState('none')
   const [experienced,setExperienced]=useState<string>('none')
   const [qualification,setQualification]=useState('none')
   const searchParams=useSearchParams()
   const router=useRouter();
   const pathName=usePathname();

 useEffect(()=>{
  //  const handleSearchJobTitle=()=>{
     const params=new URLSearchParams(searchParams);
    //  params.set("jobtitle",jobSearch)
    //  params.set("jobCity",CitySearch)
   if( gender !== "none" ) params.set("gender",gender); else params.delete("gender"); 
   if(rangeMiles!=='0' ) params.set("distance[lt]",rangeMiles); else params.delete("distance[lt]");
   if( location !== "none")  params.set("location",location) ; else params.delete("location");
   if( datePosted!== "none")  params.set("datePosted",datePosted) ; else params.delete("datePosted");
   if( experienced!== "none")  params.set("experience",experienced) ; else params.delete("experience");
   if( qualification!== "none")  params.set("qualification",qualification) ; else params.delete("qualification");

  
     router.replace(`${pathName}?${params.toString()}`,{scroll:false})
  //  }
},[CitySearch,rangeMiles,gender,location,datePosted,experienced,qualification])


  const handleChange = (value:string) => {
    setExperienced(value);
  };
   

  const handleQualification = (value:string) => {
    setQualification(value);
  };
   

  return (
    <div className='w-full h-full flex flex-col  space-y-8  bg-white'>
    {/* input fields */}
    <div className='flex flex-col w-full space-y-7 p-4 rounded-md bg-slate-100'>
            {/*  Select Categroy  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Candidate Gender</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><IoLocationOutline size={20} /></div>
                                <div className='w-full'>
                                           <Select value={gender} onValueChange={(v)=>setGender(v)}>
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-xs`}  placeholder="City or postcode" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[250px]  w-full`}>
                                                     {/* <SelectItem value="">None</SelectItem> */}
                                                     <SelectItem value="none">None</SelectItem>
                                                     <SelectItem value="male">Male</SelectItem>
                                                     <SelectItem value="female">Female </SelectItem>
                                                     <SelectItem value="other">Other</SelectItem>
                                                  
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
          </div>

           {/* Radii 1 */}
          <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Radius</div>
              <div style={{fontWeight:500}} className={` ${jost.className} text-sm text-blue-500`}>Radius: {rangeMiles} miles</div>
                    <div className='w-full'>
                       <input type='range' min='0'   value={rangeMiles} max='100'   onChange={(e) => setRangeMiles(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
          </div>
           
           {/*  Select JobType  1*/}
         <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Location</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                                <div className='w-full'>
                                <Select value={location} onValueChange={(v)=>setLocation(v)}>

                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="Job type" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="none">None</SelectItem>
                                                     <SelectItem value="London">London</SelectItem>
                                                     <SelectItem value="Los Angles">Los Angles</SelectItem>
                                                     <SelectItem value="Miami">Miami</SelectItem>
                                                     <SelectItem value="New York">New York</SelectItem>
                                                     <SelectItem value="Paris">Paris</SelectItem>
                                                   
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
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio' value="Last hour" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last Hour</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'   value="Last 7 day" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 7 days</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="Last 24 hour" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 24 hour</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="Last 14 day" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 14 days</div></div>
              <div className='flex items-center justify-center space-x-2 '><div><input name='Time-radio'  value="Last 30 day" onChange={(e)=>setDatePosted(e.target.value)} type='radio'/></div ><div style={{fontWeight:300}} className={` text-sm ${jost.className}`}>Last 30 days</div></div>

              </div>    
          </div>
               {/*  Boolean Experience Level  1*/}
                         <div className='w-full flex flex-col space-y-1 group'>
                             <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Experience Level</div>
                                 <div className='w-full flex flex-col items-start px-3 space-y-3'>
                                 <div className="flex items-center space-x-2">
                    <Switch id="fresh" checked={experienced === "none"} defaultChecked onCheckedChange={() =>handleChange("none")} />
                    <Label htmlFor="fresh">None</Label>
                  </div>
                                 <div className="flex items-center space-x-2">
                    <Switch id="fresh" checked={experienced === "fresh"} defaultChecked onCheckedChange={() =>handleChange("fresh")} />
                    <Label htmlFor="fresh">Fresh</Label>
                  </div>
            
                  <div className="flex items-center space-x-2">
                    <Switch id="1-year" checked={experienced === "1 Year"} onCheckedChange={() => handleChange("1 Year")} />
                    <Label htmlFor="1-year">1 Year</Label>
                  </div>
            
                  <div className="flex items-center space-x-2">
                    <Switch id="2-year" checked={experienced === "2 Year"} onCheckedChange={() => handleChange("2 Year")} />
                    <Label htmlFor="2-year">2 Year</Label>
                  </div>
            
                  <div className="flex items-center space-x-2">
                    <Switch id="3-year" checked={experienced === "3 Year"} onCheckedChange={() => handleChange("3 Year")} />
                    <Label htmlFor="3-year">3 Year</Label>
                  </div>
            
                  <div className="flex items-center space-x-2">
                    <Switch id="4-year" checked={experienced === "4 Year"} onCheckedChange={() => handleChange("4 Year")} />
                    <Label htmlFor="4-year">4 Year</Label>
                  </div>
                                    </div>
                                         </div>
            {/*  Qualification Level  1*/}
             <div className='w-full flex flex-col space-y-1 group'>
                 <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Qualification</div>
                     <div className='w-full flex flex-col items-start px-3 space-y-3'>
                     <div className="flex items-center space-x-2">
        <Switch id="fresh" checked={qualification === "none"} defaultChecked onCheckedChange={() => handleQualification("none")} />
        <Label htmlFor="fresh">None</Label>
      </div>
                     <div className="flex items-center space-x-2">
        <Switch id="fresh" checked={qualification === "Certificate"} defaultChecked onCheckedChange={() => handleQualification("Certificate")} />
        <Label htmlFor="fresh">caetificate</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="1-year" checked={qualification === "Associate Degree"} onCheckedChange={() => handleQualification("Associate Degree")} />
        <Label htmlFor="1-year">Associate Degree</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="2-year" checked={qualification === "Bacheloe Degree"} onCheckedChange={() => handleQualification("Bacheloe Degree")} />
        <Label htmlFor="2-year">Bacheloe Degree</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="3-year" checked={qualification === "Masters Degree"} onCheckedChange={() => handleQualification("Masters Degree")} />
        <Label htmlFor="3-year">Masters Degree</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="4-year" checked={qualification === "Dectorate Degree"} onCheckedChange={() => handleQualification("Dectorate Degree")} />
        <Label htmlFor="4-year">Dectorate Degree</Label>
      </div>
                        </div>
                             </div>


        
         
           
         
             
         

    
     
      </div>
      </div>

   
  )
}

export default CandidatesListSidebarData