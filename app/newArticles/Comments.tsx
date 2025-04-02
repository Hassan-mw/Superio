'use client';
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Jost } from 'next/font/google';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const defaultComment=[
    {id:1,body:'Hello i am hassan 1',comments:[{id:12,body:"I am nested Comment",comments:[]}]},
    {id:2,body:'Hello i am hassan 2',comments:[]},
    {id:3,body:'Hello i am hassan 3',comments:[]},
]

const Comments = () => {
    const [comment,setComment]=useState(defaultComment)
    const [text,setText]=useState('')
      function handleComment(){
        setComment(pre=>[{id:pre.length+1,body:text,comments:[]},...pre])
      }

  return (
    <div className='w-full flex flex-col space-y-8'>

        {comment.map((data,index)=>
        <>
        <div className='flex flex-col ' key={index}>
        <NestedComment  data={data}   />
        </div>
        </>
        )} 
        
   </div>
  )
}

export default Comments

function NestedComment({data}){
 const [comment,setComment]=useState(data.comments)
 const [text,setText]=useState('')
 const [reply,setReplay]=useState(false)

 function handleComment(){
  setComment(pre=>[{id:pre.length+1,body:text,comments:[]},...pre])
}
console.log(data.comments,'🙀🙀🙀😽')
  return(
   <>
           
        <div className={`w-full ${jost.className} flex items-center justify-between `}>
          <div className='w-full flex flex-col space-y-2'>
    <div className='w-full  flex items-start justify-between  space-x-5'>
      <div className='flex items-center justify-center space-x-5'>
      <img className='rounded-full h-20 w-20 '  src="/c1.jpg"/>
    <div className='flex-col space-y-1 text-md '>
       <div className='text-xl'>James</div>
       <div className='text-slate-400'>April 6,2026</div>
       <div  className='text-slate-400'>{data.body}  </div>  

  </div> 

       </div>
  <div onClick={()=>setReplay(true)} className='text-[#a0b830] hover:cursor-pointer duration-500 hover:text-[#87964d] '>Replay</div>
       </div> 
    </div>

            </div>
      {  reply && <div className='w-full flex items-center justify-end  space-x-10 pl-20'>   
  
    <input type='text' className='w-full border p-2 rounded-xl' value={text} onChange={(e)=>setText(e.target.value)} />
    
    <div className='border p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white ' onClick={()=>handleComment()}>Submit</div>
        </div> 
         }
   {/* {comment?.length>0  &&  comment.map((data,index)=>
  <div className='pl-14 py-8'>
   <NestedComment key={data.id} data={data}/>
     
  </div>
  
  )} */}
   
   </>
  )
}


function HandleInput({}){
    const [text,setText]=useState('')
    
    const submitComment=()=>{

    }
    return(
        <div className='w-full flex flex-col items-start justify-start space-y-5 p-8 text-slate-400 '>
        {/* Input */}
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-between space-y-3 md:space-y-0 md:space-x-4'>
          <div className='w-full flex flex-col items-start justify-start space-y-1'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#202124]`}>Your Name</div>
          <input placeholder='Name' className='border min-w-full placeholder:text-sm p-2 rounded-md' />  
   
          </div>
          <div className='w-full flex flex-col items-start justify-start space-y-1'>
            <div style={{fontWeight:300}} className={`${jost.className} text-sn text-[#202124]`}>Your Email</div>
            <input placeholder='Email' className='border min-w-full placeholder:text-sm p-2 rounded-md' />  
   
          </div>
        </div>
        <div className='w-full flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-3'>
         <div><input type='checkbox'/></div>
         <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#202124] `}>Save my name, email, and website in this browser for the next time I comment.</div>
        </div>
        <div className='w-full flex flex-col space-y-4'>
         <div  style={{fontWeight:300}}   className={`${jost.className} text-sm text-[#202124] `}>Your Comment</div>
         <div><Textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder='Comment' className='h-32 bg-[#f0f5f7]' /></div>
   
        </div>
        <div onClick={submitComment} className={`${jost.className} hover:bg-blue-700 hover:cursor-pointer text-white p-3 rounded-md flex items-center justify-center bg-[#1967d2] `}>Submit Comment</div>
       </div>
    )
}