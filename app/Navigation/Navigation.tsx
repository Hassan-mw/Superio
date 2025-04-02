'use client'
import { Jost } from 'next/font/google';
import React, { useState } from 'react';
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})
import Image from 'next/image';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import SideBar from '../(components)/SideBar/SideBar';
import { useSession, signIn, signOut } from "next-auth/react"

import Navigators from './Navigators';
import { usePathname } from 'next/navigation';
import Login from '../login/Login';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Register from '../login/Register';

// import SideBar from './SideBar';
function Navigation() {
  // const { data: session } = useSession()
 const [currentWay,setCurrentWay]=useState<String>('Login')
  
  function handleClick(data:String){
    setCurrentWay(data)
  }
  const [showLoginPage,setShowLoginpage]=useState(false)
  const pathname=usePathname()
 
  return (
    <div className="w-full flex items-center justify-center bg-white xl:bg-[#f2f5fb]">
      <div className="w-full h-full flex items-center justify-between max-w-screen-md py-3.5 px-5  xl:hidden">
        {/* Logo with next/image */}
        <Link href="/">
          <Image  src="/logo.svg" alt="Logo" width={120} height={120} />
        </Link>
        <div className='flex items-center justify-center space-x-4 '>

      
        <Link href="/login" className="text-2xl hover:text-blue-600 duration-75 "><div><IoPersonOutline/> </div></Link>
        <Link href="/" className="text-2xl hover:text-blue-600  duration-75 "><div><GoBell/> </div></Link>
        <div  className="pt-2"><div><SideBar/></div></div>

      
          </div>
      </div>
    <div className={` w-full  hidden xl:block ${pathname!=='/' && 'bg-white'} `}>
     
      <div className="w-full h-full flex flex-row items-center justify-between  py-8 px-16 ">
        {/* //! Left Icons */}
        <div className="flex items-center justify-center space-x-8">
      <Link href="/"><Image  src="/logo.svg" alt="Logo" width={155} height={155} /></Link>
      <div className="flex items-center justify-center space-x-2">
       <Navigators/> 
 
        </div>
        </div>
        {/* //! Right Icons */}
        <div className="flex items-center justify-center space-x-4">
 
         {/* <div  className={`${jost.className} px-5 py-4 text-[#4181d9] rounded-lg text-sm  bg-[#e8edf9] hover:text-white hover:bg-blue-700 duration-300 `}>Login / Register </div> */}
 
        <Dialog>
  <DialogTrigger>   
         <div className={`${jost.className} px-5 py-4 text-[#4181d9] rounded-lg text-sm  bg-[#e8edf9] hover:text-white hover:bg-blue-700 duration-300 `}>Login / Register </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{currentWay} to superio
      <div className='w-full flex items-center justify-center  max-w-xl p-8'>
      <div onClick={()=>handleClick("Login")}  className={`${jost.className} ${currentWay==='Login' ? 'bg-[#1967d2] text-white border-[#1967d2] ' : "bg-slate-500 text-white "} p-4 rounded-l-xl w-1/2    flex items-center justify-center hover:cursor-pointer  `}>Login</div>
      <div  onClick={()=>handleClick("Register")} className={`${jost.className} ${currentWay==='Register' ? 'bg-[#1967d2] text-white border-[#1967d2] ' : "bg-slate-500 text-white "} p-4 rounded-r-xl w-1/2    flex items-center justify-center border  hover:cursor-pointer  `}>Register</div>
      </div>
      </DialogTitle>
      <DialogDescription>
      {currentWay==='Login'&& <Login/>}
      {currentWay==='Register'&& <Register/>}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        <div className={`${jost.className} px-9 py-4 text-white rounded-lg text-sm  bg-[#1967d2] hover:bg-blue-700 duration-300 `}>job Post </div>
        <Link href="/" className="text-2xl hover:text-blue-600  duration-75 "><div><GoBell/> </div></Link>
        </div>
      </div>
    </div>
   

   {showLoginPage &&<div className='h-screen w-screen fixed flex items-center justify-center'>
      
       
   

 <Login/>
 
    </div> }
      </div>
  );
}

export default Navigation;
