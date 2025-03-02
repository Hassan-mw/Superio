import { Jost } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

const PagesOptions = () => {
 const page=[
 'Shop','Pricing','About','Contact','FAQ','Terms'
 ]
  return (
    <div className='w-full h-full flex items-start border-t-2  border-blue-700 justify-start    min-w-[200px] p-3'>

    
     <div className='grid grid-cols-1 grid-rows-6 grid-flow-col'>
      {/* {page.map((data,index)=> */}
      <Link href="shop" className={`${jost.className} px-2 py-2  text-[#656667] hover:text-[#4181d9]  text-sm hover:cursor-pointer`}>Shop</Link>
      <div  className={`${jost.className} px-2 py-2  text-[#656667] hover:text-[#4181d9]  text-sm hover:cursor-pointer`}>Pricing</div>
      {/* )} */}
     </div>
     </div>
    
   
   
  );
};

export default PagesOptions;
