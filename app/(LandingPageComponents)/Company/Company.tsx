'use client';
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const Company = () => {
  
     return (
       <div className=" w-full flex items-center justify-center bg-white py-14 px-3 border-b border-slate-200 ">
          <div className=" grid grid-cols-3 md:grid-cols-6 gap-14 sm:gap-x-32 md:gap-x-10 lg:gap-x-24 items-center justify-center max-w-screen-xl ">
   
      <div><img className="hover:scale-110 duration-500" src="/an.png" /></div>
      <div><img  className="hover:scale-110 duration-500" src="/ab.png" /></div>
      <div><img  className="hover:scale-110 duration-500" src="/sk.png" /></div>
      <div><img  className="hover:scale-110 duration-500" src="/pl.png" /></div>
      <div><img  className="hover:scale-110 duration-500" src="/sy.png" /></div>
      <div><img  className="hover:scale-110 duration-500" src="/fa.png" /></div>
    
           </div>
           </div>
       
     
     )
}

export default Company