'use client'
import React, { Children, createContext, PropsWithChildren, useContext, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md';

type PostCardContext={
    show:boolean;
    setShow:any
}

type Post=PropsWithChildren&{
    show:boolean     
              
}
import { Jost } from "next/font/google";
import { useScroll } from 'framer-motion';
import JobListData from '../JobListData';
  const jost=Jost({
    weight:['500'],
    subsets:['latin']
  })



function userPostCardContext(){
    const context=useContext(PostCardContext)
    if(!context){
        throw new Error("usePostCardContext must be used within a PostCard")
    }
    return context;
}


const PostCardContext=createContext<undefined | PostCardContext>(undefined)


export default function PostCard({children }:Post) {
    const [show,setShow]=useState(false)
  return (
    <PostCardContext.Provider value={{show,setShow}}>

        <div>{children}</div>
    </PostCardContext.Provider>
  )
}
                             

PostCard.Trigger=function(){
    const {setShow}=userPostCardContext()
    return (
    <div className="text-blue-600 flex items-center space-x-3">
        <MdMenuOpen size={20} /> 
        <span onClick={()=>setShow(true)} className={`  ${jost.className} border-b border-white hover:border-slate-400 font-bold`}>Show Sidebar</span>
        
        </div>
)

}


PostCard.Data=function(){
    const {show,setShow}=userPostCardContext()
console.log(show,'its bollen value ')
    return(
     <div className='w-full h-full flex flex-col space-y-2'>
        {show &&
          <div className='w-full  fixed top-0 left-0 bg-red-600 '>
            <div onClick={()=>setShow(false)} className='bg-blue-500 '>Cancel</div>
          <JobListData />
 
            </div>
        
        }
     </div>
   


    )
}