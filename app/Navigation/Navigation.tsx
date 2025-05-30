'use client'
import { Jost } from 'next/font/google';
import React, { useState } from 'react';
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import SideBar from '../(components)/SideBar/SideBar';
import Navigators from './Navigators';
import { usePathname } from 'next/navigation';
import Login from '../login/Login';
import  cookies  from 'js-cookie'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Register from '../login/Register';
import ShowAccountIcon from './ShowAccountIcon';




function Navigation() {

 const [currentWay,setCurrentWay]=useState<String>('Login')
 const [showLoginpage,setShowLoginPage]=useState(false) 


  function handleClick(data:String){
    setCurrentWay(data)
  }
  const pathname=usePathname()
  const x=cookies.get('jwt')
  console.log(x,'🦒🐯🐶🐶🐗🦓🦓🐸🐸🐷🐷🐷🐮🐮')
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
        <div className="flex items-center justify-center space-x-8 lg:space-x-16 xl:gap-x-14">
      <Link href="/"><Image  src="/logo.svg" alt="Logo" width={155} height={155} /></Link>
      <div className="flex items-center justify-center space-x-2">
       <Navigators/> 
 
        </div>
        </div>
        {/* //! Right Icons */}
        <div className="flex items-center justify-center space-x-4">
 
      
        <AlertDialog>
      <AlertDialogTrigger asChild>
      <div onClick={()=>setCurrentWay('Login')} className={`${jost.className} px-5 py-4 text-[#4181d9] rounded-lg text-sm  bg-[#e8edf9] hover:text-white hover:bg-blue-700 duration-300 `}>Login / Register </div>

      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='p-0 m-0 w-full'>
          
        {currentWay==='Login'&& <Login/>}
        {currentWay==='Register'&& <Register/>}
           <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
          
          </AlertDialogDescription> 
        </AlertDialogHeader>
        <AlertDialogFooter className='w-full flex items-center justify-center'>
     <div className='flex items-center justify-between fixed top-2 w-full  px-6 '>
  <div className={`${jost.className} text-2xl `}>{currentWay==='Login' ? `Login to superio` :`Create a free superio account`}</div>

       <AlertDialogCancel className=' rounded-full outline-none border-none shadow-none text-2xl font-thin '>x</AlertDialogCancel>
      </div>  
     { currentWay==='Login'&&  <div className={`${jost.className} flex items-center justify-center gap-x-2 text-md text-[#788892] `}>Don't have an account? <div style={{fontWeight:500}}  onClick={()=>setCurrentWay('Register')} className={`${jost.className} hover:cursor-pointer text-blue-700 text-lg `}> Register</div></div>}
     { currentWay==='Register'&&   <div className={`${jost.className} flex items-center justify-center gap-x-2 text-md text-[#788892] `}>Already have an account? <div style={{fontWeight:500}}  onClick={()=>setCurrentWay('Login')} className={`${jost.className} hover:cursor-pointer text-blue-700 text-lg `}> Login</div></div>}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    

{/* Right side of login buttons */}
        <div className={`${jost.className} px-9 py-4 text-white rounded-lg text-sm  bg-[#1967d2] hover:bg-blue-700 duration-300 `}>job Post </div>
       {/* {x!==undefined && <ShowAccountIcon/> } */}
        <Link href="/" className="text-2xl hover:text-blue-600  duration-75 "><div><GoBell/> </div></Link>
        </div>
      </div>
    </div>
   
{/* 
   {showLoginPage &&<div className='h-screen w-screen fixed flex items-center justify-center'>
      
       
   

 <Login/>
 
    </div> } */}
      </div>
  );
}

export default Navigation;
