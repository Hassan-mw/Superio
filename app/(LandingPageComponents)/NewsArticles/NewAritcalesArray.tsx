import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Jost } from 'next/font/google'
import { RiArrowRightSLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
  const jost=Jost({
    weight:['400'],
    subsets:['latin']
  })
import { Button } from "./../../../components/ui/newbutton";
import Link from 'next/link';

const NewAticlesArray = () => {
  return (
   
    <Carousel  className='w-full h-full max-w-screen-xl'>
    <CarouselContent className='  '>
{/* //!     1    */}
    <CarouselItem  className='basis-1/2 md:basis-1/3 group ' >
       <div className=' h-full flex flex-col space-y-4 shadow-md bg-white p-3 rounded-lg'>
      {/*  Image and Text    */}
        <div className='flex flex-col space-y-1'>
        <div className=' rounded-lg overflow-hidden '><img className='group-hover:scale-105 duration-500' src="/a1.png" alt='article-1'/></div>
         <div className='px-3 grid grid-cols-2 py-1 gap-2 text-[#6c6c6c] text-sm sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex items-center'>April.26,2021</div>
            <div className='flex items-center'><GoDotFill /> Education</div>
            <div  className='flex items-center'><GoDotFill /> 1 Comment</div>
            </div> 
        </div>
       {/* Title */}
       <div style={{fontWeight:500}} className={` ${jost.className} px-3 text-base  text-#252629] `} >Atract Sales And Profites</div>
       
       {/* Long Text */}
       <div className={`px-3 ${jost.className} text-[#6c6c6c] text-sm`}>A job ravenously while Far much then one rank beheld after outside ....</div>
       {/* Read More */}
           {/* Read More */}
           <Button className={`px-3 ${jost.className} text-[#6e9fe3] flex items-center gap-x-5 w-24`} variant="link" effect="hoverUnderline">
           <Link href={`/newArticles/attract-sales-and-profits`}> Read More </Link> 

    </Button>
       </div>
     </CarouselItem>
 
{/* //!     2    */}
    <CarouselItem  className='basis-1/2 md:basis-1/3 group' >
       <div className=' h-full flex flex-col space-y-4 shadow-md bg-white p-3 rounded-lg'>
      {/*  Image and Text    */}
        <div className='flex flex-col space-y-1'>
        <div className=' rounded-lg overflow-hidden'><img  className='group-hover:scale-105 duration-500' src="/a2.png" alt='article-1'/></div>
         <div className='px-3 grid grid-cols-2 py-1 gap-2 text-[#6c6c6c] text-sm sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
         <div className='flex items-center'>April.26,2021</div>
            <div className='flex items-center'><GoDotFill /> Education</div>
            <div  className='flex items-center'><GoDotFill /> 1 Comment</div>
            </div> 
        </div>
       {/* Title */}
       <div style={{fontWeight:500}} className={`px-3 ${jost.className} text-base  text-#252629] `} >5 Tips For Your Job interviewa</div>
       
       {/* Long Text */}
       <div className={`px-3 ${jost.className} text-[#6c6c6c] text-sm`}>A job ravenously while Far much then one rank beheld after outside ....</div>
       {/* Read More */}
           {/* Read More */}
           <Button className={`px-3 ${jost.className} text-[#6e9fe3] flex items-center gap-x-5 w-24`} variant="link" effect="hoverUnderline">
           <Link href={`/newArticles/5-tips-for-your-job-interview`}> Read More </Link> 
    </Button>
       </div>
     </CarouselItem>
 
{/* //!    3    */}
    <CarouselItem  className='basis-1/2 md:basis-1/3 group' >
       <div className=' h-full flex flex-col space-y-4 shadow-md bg-white p-3 rounded-lg'>
      {/*  Image and Text    */}
        <div className='flex flex-col space-y-1'>
        <div className=' rounded-lg overflow-hidden'><img  className='group-hover:scale-105 duration-500' src="/a3.png" alt='article-1'/></div>
         <div className='px-3 grid grid-cols-2 py-1 gap-2 text-[#6c6c6c] text-sm sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
         <div className='flex items-center'>April.26,2021</div>
            <div className='flex items-center'><GoDotFill /> Education</div>
            <div  className='flex items-center'><GoDotFill /> 1 Comment</div>
            </div> 
        </div>
       {/* Title */}
       <div style={{fontWeight:500}} className={`px-3 ${jost.className} text-base  text-#252629] `} >The Evening of The Holiday</div>
       
       {/* Long Text */}
       <div className={`px-3 ${jost.className} text-[#6c6c6c] text-sm`}>A job ravenously while Far much then one rank beheld after outside ....</div>
       {/* Read More */}
       <Button  className={`px-3 ${jost.className} text-[#6e9fe3] flex items-center gap-x-5 w-24`} variant="link" effect="hoverUnderline">
      <Link href={`/newArticles/the-evening-of-the-holiday`}> Read More </Link> 
    </Button>
       </div>
     </CarouselItem>
 

 
 
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>




    
 
  )
}

export default NewAticlesArray