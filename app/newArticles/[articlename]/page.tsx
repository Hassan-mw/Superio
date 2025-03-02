import articles from '@/app/Array/articles'
import { minify } from 'next/dist/build/swc/generated-native';
import { Jost } from 'next/font/google'
import Image from 'next/image';
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitch, FaTwitter } from "react-icons/fa";
import { IoLogoTwitter } from 'react-icons/io5';
import NewAritcales from '@/app/(LandingPageComponents)/NewsArticles/NewsArticles';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import Comments from '../Comments';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


interface articleDataType {
 params:{articlename:string}
}
interface filteredArticleDataType {
  image:string,
  title:string,
  date:string,
  category:string,
  comment:Comment[],
  description:string,
  middleImage:string,
  points:string[],
  requirement:string[]
}

interface Comment{
  name: string;
  date: string;
  comment: string;
}



const page =async ({params}:articleDataType) => {
  const article=await params.articlename
  const articleName=article
  const filteredArticle:filteredArticleDataType | undefined=articles.find(el=>el.url===articleName)
 
  if(!filteredArticle){
    return <div>no article</div>
  }
  const {image,title,date,category,comment,description,middleImage,points,requirement}=filteredArticle


  return (
    <div className='w-full flex flex-col items-center justify-center space-y-8 py-7 bg-white'>
       
       <div className={`${jost.className} text-2xl`}>{filteredArticle?.title}</div>
        <div className='flex items-center justify-center space-x-4'>
           <div className='flex items-center justify-center space-x-2'>
            <div><img className='rounded-full' src="/pq.png"/></div>
            <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f]`}>Admin</div>
           </div>
           <div className='flex items-center justify-center space-x-2'>
            <div><GoDotFill size={10} /></div>
            <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f]`}>{date}</div>
           </div>
           <div className='flex items-center justify-center space-x-2'>
            <div><GoDotFill  size={10}  /></div>
            <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f]`}>{category}</div>
           </div>
           <div className='flex items-center justify-center space-x-2'>
            <div><GoDotFill size={10}  /></div>
            <div style={{fontWeight:400}} className={`${jost.className} text-[#77838f]`}>{comment.length} comment</div>
           </div>
        </div>
      <div className='w-full flex items-center justify-center'>
        <img className='object-contain ' src={`/${image}.jpg`} alt='Image'/>
      </div>
      <div className='max-w-5xl space-y-8 flex flex-col p-4'>
       <div className='flex flex-col space-y-4 items-start justify-start'>
      <div   className={`${jost.className} text-2xl`}>Course Description</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#77838f]`}>{description}</div>
      </div>
      <div className='w-full flex  items-center justify-center rounded-md bg-[#f0f5f7]'>
        <div className='flex flex-col items-start justify-start p-5 lg:p-12 space-y-4'>
       <div style={{fontWeight:300}} className={`${jost.className} `}>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.</div>
       <div  style={{fontWeight:200}} className={`${jost.className} text-md text-[#77838f]`}>Luis Pickford</div>
        </div>
      </div>
       <div className='flex flex-col space-y-4 items-start justify-start'>
      <div   className={`${jost.className} text-2xl`}>What you’ll learn</div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-5'>
      
      {
       points.map((data,index)=>
        <div key={index} style={{fontWeight:300}} className={`${jost.className} flex items-center gap-x-2 justify-start text-sm text-[#77838f]`}><IoIosCheckmarkCircle />{data}</div>
      )
      }

      </div>
      </div>
      <div className='w-full'>
        <img className='object-contain ' src={`/${middleImage}.jpg`} alt='Image'/>
      </div>
      <div className='flex flex-col space-y-4 items-start justify-start'>
      <div   className={`${jost.className} text-2xl`}>Requirements</div>
      <div className='grid grid-cols-1 items-start justify-start gap-5'>
      
      {
       requirement.map((data,index)=>
        <div key={index} style={{fontWeight:300}} className={`${jost.className} flex items-center justify-start gap-x-2 text-sm text-[#77838f]`}><IoIosCheckmarkCircle />{data}</div>
      )
      }

      </div>
      </div>
         <div className='w-full  flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 items-start justify-start lg:items-center lg:justify-between  space-y-5   p-7 border-y'>
            <div className='w-full  flex md:flex-row flex-col items-start justify-start lg:items-center space-y-3 md:space-y-0 md:space-x-3     '>
            <div className={`${jost.className} text-lg  flex items-start justify-start`}>Share this post on </div>
            <div className='flex items-start justify-start space-x-4'>

           <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center justify-center space-x-1 bg-[#1967d2] text-white rounded-lg p-2'>
                <div className='text-white'><FaFacebookF /></div>
                <div  className={`${jost.className} text-md `}>Facebook</div>
            </div>
           </div>
           <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center justify-center space-x-3 bg-[#bc91e8] text-white rounded-lg p-2'>
                <div className='text-white'><FaTwitter /></div>
                <div  className={`${jost.className} text-md `}>Twitter</div>
            </div>
           </div>
           <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center justify-center space-x-1 bg-[#d93025] text-white rounded-lg p-2'>
                <div className='text-white'><FaPinterestP /></div>
                <div  className={`${jost.className} text-md `}>pinterest</div>
            </div>
           </div>
            </div>
            </div>
            <div className='flex items-start justify-start space-x-4'>
            <div className='flex items-center justify-center space-x-4 text-sm'><div className={`${jost.className} px-4 py-1 rounded-md hover:cursor-pointer duration-300 text-slate-500  bg-slate-300 `}>App</div> </div>
            <div className='flex items-center justify-center space-x-4 text-sm'><div className={`${jost.className} px-4 py-1 rounded-md hover:cursor-pointer duration-300 text-slate-500  bg-slate-300 `}>Design</div> </div>
            <div className='flex items-center justify-center space-x-4 text-sm'><div className={`${jost.className} px-4 py-1 rounded-md hover:cursor-pointer duration-300 text-slate-500  bg-slate-300 `}>Travel</div> </div>
           </div>
            </div>
    {/* Comments */}
    {/* <Comments/> */}
    {/* Comments Input */}
      <div className='w-full border rounded-md '>
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
         <div><Textarea placeholder='Comment' className='h-32 bg-[#f0f5f7]' /></div>

        </div>
        <div className={`${jost.className} hover:bg-blue-700 hover:cursor-pointer text-white p-3 rounded-md flex items-center justify-center bg-[#1967d2] `}>Submit Comment</div>
       </div>
      </div>
       </div>
      <NewAritcales/>
    </div>
  )
}

export default page