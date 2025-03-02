import { Jost } from 'next/font/google';
import React from 'react';


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})
const FindJobOptions = () => {
 const jobListStyles=[
  'Jobs - List 1','Jobs - List 2','Jobs - List 3','Jobs - List 4','Jobs - List 5','Jobs - List 6',
  'Jobs - Grid v1','Jobs - Grid v2','Jobs - Grid v3','Jobs - Grid v4','Jobs - TopMap v1','Jobs -  TopMap v2',
  'Jobs - Half Map ','Jobs -Half Details ','Jobs - List 7','Jobs -Grid 5'
 ]
 const jobSingle=[
  'Job - Single 1', 'Job - Single 2', 'Job - Single 3', 'Job - Single 4', 'Job - Single 5', 'Job - Single 6', 
  'Job - Single 7','Job Applyig Internal','Job Applyig External','Job Applyig Email','Job Applyig Call To'
 ]

  return (
    <div className='w-full h-full flex items-center border-t-2 border-blue-700 justify-center py-3 gap-x-12 min-w-[700px] z-50'>
     {/* //!  Left Grid */}
     <div className='flex flex-col items-center justify-center '>
     <div className='w-full flex items-start justify-start text-lg pl-2'>Jobs List Style</div>
     <div className='grid grid-cols-2 grid-rows-8 gap-x-7  grid-flow-col'>
      {jobListStyles.map((data,index)=>
      <div key={index} className={` ${jost.className} px-2 py-1  text-[#656667] hover:text-[#4181d9] text-sm hover:cursor-pointer `}>{data}</div>
      )}
     </div>
     </div>
     {/* //!  Right Grid */}
     <div className='flex flex-col items-center justify-center '>
     <div className='w-full flex items-start justify-start pl-2 text-lg'>Jobs Single</div>
     <div className='grid grid-cols-2 grid-rows-8 gap-x-7 grid-flow-col'>
      {jobSingle.map((data,index)=>
      <div key={index} className={` ${jost.className} px-2  py-1 text-[#656667] hover:text-[#4181d9] text-sm hover:cursor-pointer`}>{data}</div>
      )}
     </div>
     </div>
    </div>
   
  );
};

export default FindJobOptions;
