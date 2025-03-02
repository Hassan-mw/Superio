import { Jost } from 'next/font/google';
import React from 'react';


const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

const EmployersOptions = () => {
 const employerStyles=[
  'Employers - List','Employers - Grid v1','Employers - Grid v2','Employers - Top Map',
 ]
 const emploterSingle=[
  'Single 1','Single 2','Single 3'
 ]

  return (
    <div className='w-full h-full flex items-center border-t-2 space-x-8 border-blue-700 justify-center py-3   min-w-[360px]'>
     {/* //!  Left Grid */}
     <div className='flex flex-col items-center justify-center '>
     <div className={` ${jost.className}  w-full flex items-start justify-start text-lg pl-2`}>Employers Style</div>
     <div className='grid grid-cols-1 grid-rows-4 grid-flow-col'>
      {employerStyles.map((data,index)=>
      <div key={index} className={` ${jost.className} px-2 py-1  text-[#656667] hover:text-[#4181d9]  text-sm hover:cursor-pointer`}>{data}</div>
      )}
     </div>
     </div>
     {/* //!  Right Grid */}
     <div className='flex flex-col items-start justify-center '>
     <div className={` ${jost.className} w-full flex items-start justify-start  text-lg pl-2`}>Employers Single</div>
     <div className='grid grid-cols-1 place-content-center grid-rows-4 grid-flow-col'>
      {emploterSingle.map((data,index)=>
      <div key={index} className={` ${jost.className} px-2  py-1  text-[#656667] hover:text-[#4181d9] text-sm hover:cursor-pointer`}>{data}</div>
      )}
     </div>
     </div>
    </div>
   
  );
};

export default EmployersOptions;
