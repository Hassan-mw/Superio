"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./../../components/ui/direction-aware-hover";
import Link from "next/link";
import { Jost } from "next/font/google";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const ShopData=()=> {
    
const shopArray=[
    {id:1,title:'Your Carrer',price:'$280.00'},
    {id:2,title:'Designing Your Life',price:'$260.00'},
    {id:3,title:'Learn Gyn & Fitness',price:'$150.00'},
    {id:4,title:'Your Life in London',price:'$90.00'},
    {id:5,title:'Control of Your Ideas',price:'$120.00'},
    {id:6,title:'Service Honey Restaurant',price:'$150.00'},
    {id:7,title:'Building Future',price:'$380.00'},
    {id:8,title:'Basic',price:'$199.00'},
    {id:9,title:'Standard',price:'$499.00'},
    {id:10,title:'Extended',price:'$799.00'},
    {id:11,title:'Company',price:'$399.00'},
    {id:12,title:'Enterprise',price:'$550.00'},
    {id:13,title:'Business',price:'$699.00'},
]
    

const [count,setCount]=useState(1)
const [itemPerPage,setitemPerPage]=useState(4)

const lastIndex=itemPerPage*count;//6
 const firstIndex=lastIndex-itemPerPage//6-6=0
const records=shopArray.slice(firstIndex,lastIndex)
const number=[...Array(Math.ceil(shopArray.length/itemPerPage)+1).keys()].slice(1)

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-10">

     <div className="w-full flex items-center justify-between  ">
        <div style={{fontWeight:400}}  className={`${jost.className}`}>Showing {firstIndex} - {lastIndex>shopArray.length ? shopArray.length : lastIndex } of {shopArray.length} results</div>
       <div className="bg-[#f2f5fc] p-1 rounded-md">
       <Select>
                               <SelectTrigger className="w-full focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                 <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-xs`}  placeholder="Sort By" />
                               </SelectTrigger>
                               <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]`}>
                                 <SelectItem value="Popularity">Popularity</SelectItem>
                                 <SelectItem value="London">London</SelectItem>
                                 <SelectItem value="Average Rating">Average Rating</SelectItem>
                                 <SelectItem value="Latest">Latest</SelectItem>
                                 <SelectItem value="Price low to high">Price low to high</SelectItem>
                                 <SelectItem value="Price high to low">Price high to low</SelectItem>

                               </SelectContent>
                       </Select>
       </div>
     </div>
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-3">
      
   
    {
        records.map((data,index)=>(
            <div key={index} className="w-full flex flex-col border  space-y-3  rounded-lg overflow-hidden ">
               <div className="bg-black relative">
                <img className=" w-full h-52 object-cover rounded-t-md" src="/review1.jpg" alt="ff"/>
               <div className="bg-black w-full h-52 bg-black/35 opacity-75 absolute top-0 rounded-t-md"></div>
                </div>
                  <div className="flex flex-col items-center justify-center space-y-2 p-3 ">
                 <div className={`${jost.className}  flex flex-col items-center justify-center w-full   `}>
                      <div className={`${jost.className}  flex items-center justify-center`}>{data.title}</div> 
                       <div  className={`${jost.className} text-slate-400  flex items-center justify-center`}>{data.price}</div>
                
                  </div>
                  <Link  className={`${jost.className} group-hover:block bg-[#1967d2] hover:bg-blue-700 rounded-lg py-2 px-5 duration-700 text-white`} href='/cart'>Add To Cart</Link>

                 </div>
       </div>)
      )
    }
    
    
    </div>
    <div className="w-full flex items-center justify-center space-x-3">
      {number.map((data,index)=>
      <div onClick={()=>setCount(data)} className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${data===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`} key={index}>
        {data}
      </div>
    )}
      </div>   
    </div>
  );
}
export default ShopData;