import React from 'react'
import { FaCoins } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuUserSearch } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Jost } from 'next/font/google';
import Link from 'next/link';
const jost=Jost({
  weight:['600'],
  subsets:['latin']
})
const PopularJobArray = () => {

    const popularJobArray=[
        {id:1,icon:<FaCoins size={20} />,url:'accounting-finance' ,name:'Accounting  Finance',num:2},
        {id:2,icon:<BiMoviePlay size={20} /> ,url:"development",name:'Development ',num:4},
        {id:3,icon:<RiCustomerService2Line size={20}/>, url:"customer" ,  name:'customer Service ',num:3},
        {id:4,icon:<RiCustomerService2Line size={20} /> ,url:'marketing',name:'Marketing ',num:3},
        {id:5,icon:<LuUserSearch size={20} />,url:'human-resources' ,name:'Human Resources ',num:2},
        {id:6,icon:<FaBriefcaseMedical size={20} />,url:'health-and-care' ,name:'Health and Care Service ',num:1},
        {id:7,icon:<FaPaintbrush size={20} />,url:'design' ,name:'Design ',num:2},
        {id:8,icon:<MdOutlineRocketLaunch size={20} />,url:'project-mangament' ,name:'Project Managment ',num:0},
        {id:9,icon:<IoCarOutline size={20} /> ,url:'automotive-jobs',name:'Automotive jobs ',num:1},
    ]

   
  return (
    <div className='w-full grid grid-cols-1 gap-6 md:grid-cols-3 '>
        {popularJobArray.map((data,index)=>
       <Link href={`/job-category/${data.url}/ `} key={index}  className='w-full flex items-start justify-start  border border-slate-200 rounded-md   group '>
        <div className=' flex items-center -center space-x-2  p-5  '>
          <div className='border p-3 rounded-md bg-[#ecedf2] font-thin text-[#2d73d3] duration-500 group-hover:bg-[#2d73d3] group-hover:text-white  stroke-1 hover:cursor-pointer'>{data.icon}</div>
          <div className='flex flex-col items-start justify-between truncate    '>
            <div className={`${jost.className} text-base font-semibold text-[#202124] group-hover:text-[#2d73d3] duration-500 truncate md:w-[130px] lg:w-[200px] `}>{data.name}</div>  
            <div className='text-[#72858a] text-sm'>({data.num} open position )</div>  
          </div>
        </div>
        </Link>
        )}
    </div>
  )
}

export default PopularJobArray